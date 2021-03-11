package com.de.boederij.repository;

import com.de.boederij.model.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface IncomeRepository extends JpaRepository<Income, Long> {


    List<Income> getAllByUserId(Long userId);

    List<Income> getAllByUserIdAndName(Long userId, String name);

    List<Income> getAllByUserIdAndDate(Long userId, Date date);

    List<Income> getAllByUserIdAndDateBetween(Long userId, Date from, Date to);

}
