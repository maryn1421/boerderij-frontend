package com.de.boederij.repository;

import com.de.boederij.model.Cost;
import com.de.boederij.model.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface IncomeRepository extends JpaRepository<Income, Long> {
    List<Income> getAllByUserId(Long userId);

    List<Income> getAllByUserIdAndName(Long userId, String name);

    List<Income> getAllByUserIdAndDate(Long userId, Date date);

    List<Income> getAllByDateBetween(Date from, Date to);

    List<Income> getAllByUserIdAndId(Long userId, Long costId);
}
