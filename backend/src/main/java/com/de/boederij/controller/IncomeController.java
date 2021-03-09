package com.de.boederij.controller;

import com.de.boederij.model.Cost;
import com.de.boederij.model.Income;
import com.de.boederij.repository.IncomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        return incomeRepository.getAllByDateBetween(from, to);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/{cost_id}")
    public List<Income> getAllCostsBetweenDates(@PathVariable("user_id") Long userId, @PathVariable("cost_id") Long costId) {
        return incomeRepository.getAllByUserIdAndId(userId, costId);
    }

}
