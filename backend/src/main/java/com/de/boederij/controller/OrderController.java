package com.de.boederij.controller;

import com.de.boederij.model.Order;
import com.de.boederij.payload.OrderDay;
import com.de.boederij.payload.OrderRequest;
import com.de.boederij.payload.OrderResponse;
import com.de.boederij.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@CrossOrigin
@RequestMapping("/order")
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/all")
    public List<Order> getAllOrdersByUserId(@PathVariable("user_id") Long userId) {
        return orderRepository.getAllByUserId(userId);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/{cost_name}")
    public List<Order> getAllOrdersByUserIdAndName(@PathVariable("user_id") Long userId, @PathVariable("cost_name") String name) {
        return orderRepository.getAllByUserIdAndName(userId, name);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/{date}")
    public List<Order> getAllOrdersByUserIdAndDate(@PathVariable("user_id") Long userId, @PathVariable("date") Date date) {
        return orderRepository.getAllByUserIdAndDate(userId, date);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/{from}/{to}")
    public List<Order> getAllOrdersBetweenDates(@PathVariable("user_id") Long userId, @PathVariable("from") Date from, @PathVariable("to") Date to) {
        return orderRepository.getAllByUserIdAndDateBetween(userId, from, to);
    }


    @PreAuthorize("hasRole('USER')")
    @PutMapping("/{user_id}/finish/{order_id}")
    public ResponseEntity<String> finishOrder(@PathVariable("user_id") Long userId, @PathVariable("order_id") Long orderId) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);

        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            if (!order.getUserId().equals(userId)) {
                return ResponseEntity.badRequest().build();
            } else {
                order.setFinished(true);
                Object response = orderRepository.save(order);

                if (response.getClass().equals(Order.class)) {
                    return ResponseEntity.ok("A rendelés sikeresen módosításrea került!");
                } else {
                    return ResponseEntity.badRequest().build();
                }
            }

        } else {
            return ResponseEntity.badRequest().build();
        }


    }


    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/orders/14")
    public OrderResponse getNext14DaysOrders(@PathVariable("user_id") Long userId) {
        OrderResponse orderResponse = new OrderResponse();
        for (int i = 0; i < 14; i++) {
            Calendar calendar = Calendar.getInstance();
            calendar.add(Calendar.DAY_OF_YEAR, i);
            Date date = calendar.getTime();

            List<Order> orders = orderRepository.findAllByDateAndUserId(date, userId);

            OrderDay orderDay = new OrderDay(date, orders);

            List<OrderDay> dayList = orderResponse.getOrderDayList();

            dayList.add(orderDay);
            orderResponse.setOrderDayList(dayList);
        }
        return orderResponse;
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping("/add")
    public ResponseEntity<String> addOrderByUserId(@RequestBody OrderRequest orderRequest) {
        Order orderObject = new Order();
        orderObject.setUserId(orderRequest.getUserId());
        orderObject.setName(orderRequest.getName());
        orderObject.setDate(orderRequest.getDate());
        orderObject.setFinished(false);
        orderObject.setOptionType(orderRequest.getTypeId());
        orderObject.setPrice(orderRequest.getPrice());
        Object response = orderRepository.save(orderObject);

        if (response.getClass().equals(Order.class)) {
            return ResponseEntity.ok("A rendelés sikeresen hozzáadásra került!");
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

}
