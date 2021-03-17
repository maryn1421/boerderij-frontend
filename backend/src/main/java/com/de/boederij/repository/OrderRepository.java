package com.de.boederij.repository;

import com.de.boederij.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> getAllByUserId(Long userId);

    List<Order> getAllByUserIdAndName(Long userId, String name);

    List<Order> getAllByUserIdAndDate(Long userId, Date date);

    List<Order> getAllByUserIdAndDateBetween(Long userId, Date from, Date to);

    List<Order> getAllByDateAndUserId(Date date, Long userId);

    List<Order> findAllByDateAndUserId(Date date, Long userId);
}
