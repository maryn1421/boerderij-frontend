package com.de.boederij.controller;

import com.de.boederij.repository.CostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cost")
public class CostController {

    @Autowired
    CostRepository costRepository;

}
