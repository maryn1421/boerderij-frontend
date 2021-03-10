package com.de.boederij.controller;

import com.de.boederij.model.Order;
import com.de.boederij.payload.OrderRequest;
import com.de.boederij.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@RestController
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
    @PostMapping("/add")
    public ResponseEntity<String> addOrderByUserId(@RequestBody OrderRequest orderRequest) {
        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime());

        Order orderObject = new Order();
        orderObject.setUserId(orderRequest.getUserId());
        orderObject.setName(orderRequest.getName());
        orderObject.setDate(timestamp);
        Object response = orderRepository.save(orderObject);

        if (response.getClass().equals(Order.class)) {
            return ResponseEntity.ok("A rendelés sikeresen hozzáadásra került!");
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

}
