package com.de.boederij.repository;

import com.de.boederij.model.CostOption;
import com.de.boederij.model.IncomeOption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CostOptionRepository extends JpaRepository<CostOption, Long> {
    List<CostOption> getAllByUserId(Long userId);



}