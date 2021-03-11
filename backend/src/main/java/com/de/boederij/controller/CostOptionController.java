package com.de.boederij.controller;

import com.de.boederij.model.CostOption;
import com.de.boederij.model.IncomeOption;
import com.de.boederij.payload.IncomeOptionRequest;
import com.de.boederij.repository.CostOptionRepository;
import com.de.boederij.repository.IncomeOptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/costOptions")
public class CostOptionController {


    @Autowired
    CostOptionRepository costOptionRepository;

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}")
    public List<CostOption> getAllCostOptionByUserId(@PathVariable Long user_id) {
        return costOptionRepository.getAllByUserId(user_id);
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping("/{user_id}")
    public ResponseEntity<String> addNewCostOption(@RequestBody IncomeOptionRequest request, @PathVariable Long user_id) {
        CostOption costOptionObject = new CostOption();
        costOptionObject.setName(request.getName());
        costOptionObject.setUserId(user_id);
        Object response = costOptionRepository.save(costOptionObject);
        if (response.getClass().equals(CostOption.class)) {
            return ResponseEntity.ok("A kiadás opció sikeresen hozzáadásra került!");
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
