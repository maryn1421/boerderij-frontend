package com.de.boederij.controller;

import com.de.boederij.model.Animal;
import com.de.boederij.model.AnimalType;
import com.de.boederij.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/animal")
public class AnimalController {

    @Autowired
    AnimalRepository animalRepository;

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/all")
    public List<Animal> getAllAnimals() {
        return animalRepository.findAll();
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/all")
    public List<Animal> getAllAnimalsByUserId(@PathVariable("user_id") Long userId) {
        return animalRepository.getAllByUserId(userId);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/{type}")
    public List<Animal> getAllAnimalsByUserIdAndType(@PathVariable("user_id") Long userId, @PathVariable("type")AnimalType type) {
        return animalRepository.getAllByUserIdAndType(userId, type);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/{user_id}/{animal_id}")
    public List<Animal> getAnimalByUserIdAndAnimalId(@PathVariable("user_id") Long userId, @PathVariable("animal_id")Long animalId) {
        return animalRepository.getAnimalByUserIdAndId(userId, animalId);
    }
}
