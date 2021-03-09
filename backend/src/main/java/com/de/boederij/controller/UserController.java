package com.de.boederij.controller;

import com.de.boederij.config.exception.ResourceNotFoundException;
import com.de.boederij.model.User;
import com.de.boederij.repository.UserRepository;
import com.de.boederij.security.CurrentUser;
import com.de.boederij.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;



    @GetMapping("/test")
    public String test(){
        return "test";
    }

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        System.out.println(userPrincipal);
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
}