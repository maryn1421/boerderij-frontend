package com.de.boederij.controller;


import com.de.boederij.model.Income;
import com.de.boederij.model.IncomeOption;
import com.de.boederij.payload.IncomeOptionRequest;
import com.de.boederij.repository.IncomeOptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/incomeOptions")
public class IncomeOptionController {

    @Autowired
    IncomeOptionRepository incomeOptionRepository;

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}")
    public List<IncomeOption> getAllIncomeOptionByUserId(@PathVariable Long user_id) {
        return incomeOptionRepository.getAllByUserId(user_id);
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping("/{user_id}")
    public ResponseEntity<String> addNewIncomeOption(@RequestBody IncomeOptionRequest request, @PathVariable Long user_id) {
        IncomeOption incomeOptionObject = new IncomeOption();
        incomeOptionObject.setName(request.getName());
        incomeOptionObject.setUserId(user_id);
        Object response = incomeOptionRepository.save(incomeOptionObject);
        if (response.getClass().equals(IncomeOption.class)) {
            return ResponseEntity.ok("A bevételi opció sikeresen hozzáadásra került!");
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}

