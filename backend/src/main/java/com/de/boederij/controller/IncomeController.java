package com.de.boederij.controller;

import com.de.boederij.model.Cost;
import com.de.boederij.model.Income;
import com.de.boederij.payload.CostRequest;
import com.de.boederij.payload.IncomeRequest;
import com.de.boederij.repository.IncomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/income")
public class IncomeController {

    @Autowired
    IncomeRepository incomeRepository;

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/all")
    public List<Income> getAllIncomesByUserId(@PathVariable("user_id") Long userId) {
        return incomeRepository.getAllByUserId(userId);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/{cost_name}")
    public List<Income> getAllCostsByUserIdAndName(@PathVariable("user_id") Long userId, @PathVariable("cost_name") String name) {
        return incomeRepository.getAllByUserIdAndName(userId, name);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/{date}")
    public List<Income> getAllCostsByUserIdAndDate(@PathVariable("user_id") Long userId, @PathVariable("date") Date date) {
        return incomeRepository.getAllByUserIdAndDate(userId, date);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/{from}/{to}")
    public List<Income> getAllCostsBetweenDates(@PathVariable("user_id") Long userId, @PathVariable("from") Date from, @PathVariable("to") Date to) {
        return incomeRepository.getAllByUserIdAndDateBetween(userId, from, to);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/{cost_id}")
    public List<Income> getAllCostsBetweenDates(@PathVariable("user_id") Long userId, @PathVariable("cost_id") Long costId) {
        return incomeRepository.getAllByUserIdAndId(userId, costId);
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping("/add")
    public ResponseEntity<String> addIncomeByUserId(@RequestBody IncomeRequest incomeRequest) {
        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime());

        Income incomeObject = new Income();
        incomeObject.setName(incomeRequest.getName());
        incomeObject.setType(incomeRequest.getType());
        incomeObject.setUserId(incomeRequest.getUserId());
        incomeObject.setValue(incomeRequest.getValue());
        incomeObject.setDate(timestamp);
        Object response = incomeRepository.save(incomeObject);

        if (response.getClass().equals(Income.class)) {
            return ResponseEntity.ok("A bevétel hozzáadásra került!");
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

}
