package com.de.boederij.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CostTest {
    Cost testCost = new Cost();

    @Test
    void getAndSetId() {
        testCost.setId(1L);
        assertEquals(1L, testCost.getId());
    }

    @Test
    void getAndSetName() {
        testCost.setName("test");
        assertEquals("test", testCost.getName());
    }

    @Test
    void getAndSetType() {
       // testCost.setType(customType.VEHICLE);
       // assertEquals(customType.VEHICLE, testCost.getType());
    }

    @Test
    void getAndSetUserId() {
        testCost.setUserId(7L);
        assertEquals(7L, testCost.getUserId());
    }

}