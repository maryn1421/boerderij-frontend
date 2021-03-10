package com.de.boederij.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class IncomeTest {
    Income testIncome = new Income();


    @Test
    void getAndSetId() {
        testIncome.setId(1L);
        assertEquals(1L, testIncome.getId());
    }

    @Test
    void getName() {
        testIncome.setName("test");
        assertEquals("test", testIncome.getName());
    }

    @Test
    void getType() {
       // testIncome.setType(customType.VEHICLE);
      //  assertEquals(customType.VEHICLE, testIncome.getType());
    }

    @Test
    void getUserId() {
        testIncome.setUserId(7L);
        assertEquals(7L, testIncome.getUserId());
    }
}