package com.de.boederij.controller;

import com.de.boederij.model.Animal;
import com.de.boederij.model.Cost;
import com.de.boederij.payload.CostRequest;
import com.de.boederij.repository.CostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/cost")
public class CostController {

    @Autowired
    CostRepository costRepository;

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/all")
    public List<Cost> getAllCostsByUserId(@PathVariable("user_id") Long userId) {
        return costRepository.getAllByUserId(userId);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/{cost_name}")
    public List<Cost> getAllCostsByUserIdAndName(@PathVariable("user_id") Long userId, @PathVariable("cost_name") String name) {
        return costRepository.getAllByUserIdAndName(userId, name);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/{date}")
    public List<Cost> getAllCostsByUserIdAndDate(@PathVariable("user_id") Long userId, @PathVariable("date") Date date) {
        return costRepository.getAllByUserIdAndDate(userId, date);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/{from}/{to}")
    public List<Cost> getAllCostsBetweenDates(@PathVariable("user_id") Long userId, @PathVariable("from") Date from, @PathVariable("to") Date to) {
        return costRepository.getAllByUserIdAndDateBetween(userId, from, to);
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping("/add")
    public ResponseEntity<String> addCostByUserId(@RequestBody CostRequest costRequest) {
        Cost costObject = new Cost();
        costObject.setName(costRequest.getName());
        costObject.setOptionId(costRequest.getOptionId());
        costObject.setUserId(costRequest.getUserId());
        costObject.setValue(costRequest.getValue());
        costObject.setDate(costRequest.getDate());
        Object response = costRepository.save(costObject);
        if (response.getClass().equals(Cost.class)) {
            return ResponseEntity.ok("A kiadás sikeresen hozzáadásra került!");
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
