package com.de.boederij.repository;

import com.de.boederij.model.Income;
import com.de.boederij.model.IncomeOption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Date;
import java.util.List;

@Repository
public interface IncomeOptionRepository extends JpaRepository<IncomeOption, Long> {
    List<IncomeOption> getAllByUserId(Long userId);



}