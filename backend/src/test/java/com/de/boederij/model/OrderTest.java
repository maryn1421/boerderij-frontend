package com.de.boederij.model;

import org.junit.jupiter.api.Test;

import java.util.Calendar;
import java.sql.Date;

import static org.junit.jupiter.api.Assertions.*;

class OrderTest {
    Order testOrder = new Order();

    @Test
    void getAndSetId() {
        testOrder.setId(1L);
        assertEquals(1L, testOrder.getId());

    }

    @Test
    void getAndSetName() {
        testOrder.setName("test");
        assertEquals("test", testOrder.getName());
    }

    @Test
    void getAndSetDate() {
    }

    @Test
    void getAndSetUserId() {
        testOrder.setUserId(7L);
        assertEquals(7L, testOrder.getUserId());
    }
}