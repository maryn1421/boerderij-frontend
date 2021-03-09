package com.de.boederij.repository;

import com.de.boederij.model.Animal;
import com.de.boederij.model.AnimalType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Long> {

    List<Animal> getAllByUserId(Long userId);

    List<Animal> getAllByUserIdAndType(Long userId, AnimalType type);

    List<Animal> getAnimalByUserIdAndId(Long userId, Long animalId);
}
