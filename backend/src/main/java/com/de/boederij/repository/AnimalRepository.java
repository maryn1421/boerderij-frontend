package com.de.boederij.repository;

import com.de.boederij.model.Animal;
import com.de.boederij.model.AnimalType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnimalRepository extends JpaRepository<Animal, Long> {

    List<Animal> getAllByUserId(Long userId);

    List<Animal> getAllByUserIdAndType(Long userId, AnimalType type);

    List<Animal> getAnimalByUserIdAndId(Long userId, Long animalId);
}
