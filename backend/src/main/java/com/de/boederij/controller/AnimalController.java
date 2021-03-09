package com.de.boederij.controller;

import com.de.boederij.model.Animal;
import com.de.boederij.model.AnimalType;
import com.de.boederij.payload.AnimalRequest;
import com.de.boederij.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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

    @PreAuthorize("hasRole('USER')")
    @PostMapping("/add")
    public ResponseEntity<String> addAnimalByUserId(@RequestBody AnimalRequest animalRequest) {

        Animal animalObject = new Animal();
        animalObject.setUserId(animalRequest.getUserId());
        animalObject.setType(animalRequest.getType());
        Object response = animalRepository.save(animalObject);

        if (response.getClass().equals(Animal.class)) {
            return ResponseEntity.ok("Az állat sikeresen hozzáadásra került!");
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
