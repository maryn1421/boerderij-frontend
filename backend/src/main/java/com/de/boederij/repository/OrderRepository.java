package com.de.boederij.repository;

import com.de.boederij.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> getAllByUserId(Long userId);

    List<Order> getAllByUserIdAndName(Long userId, String name);

    List<Order> getAllByUserIdAndDate(Long userId, Date date);

    List<Order> getAllByUserIdAndDateBetween(Long userId, Date from, Date to);
}
