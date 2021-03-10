package com.de.boederij.controller;

import com.de.boederij.model.Income;
import com.de.boederij.model.IncomeOption;
import com.de.boederij.payload.IncomeRequest;
import com.de.boederij.repository.IncomeOptionRepository;
import com.de.boederij.repository.IncomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/incomeOptions")
public class IncomeOptionController {

    @Autowired
    IncomeOptionRepository incomeOptionRepository;

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/all")
    public List<IncomeOption> getAllIncomeOptionByUserId(@PathVariable Long user_id) {
        return incomeOptionRepository.getAllByUserId(user_id);
    }





}
