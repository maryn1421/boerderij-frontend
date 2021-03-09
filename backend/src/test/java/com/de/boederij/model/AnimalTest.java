package com.de.boederij.model;

import org.junit.jupiter.api.Test;

import javax.persistence.Entity;
import javax.persistence.Table;

import static org.junit.jupiter.api.Assertions.*;

class AnimalTest {
    Animal testAnimal = new Animal();


    @Test
    void getAndSetId() {
        testAnimal.setId(1L);
        assertEquals(1L, testAnimal.getId());
    }

    @Test
    void getAndSetType() {
        testAnimal.setType(AnimalType.CHICKEN);
        assertEquals(AnimalType.CHICKEN, testAnimal.getType());
    }

    @Test
    void getAndSetUserId() {
        testAnimal.setUserId(7L);
        assertEquals(7L, testAnimal.getUserId());
    }
}