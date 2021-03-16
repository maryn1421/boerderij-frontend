package com.de.boederij.payload;

import lombok.Data;

import java.util.List;
import com.de.boederij.payload.OrderDay;


@Data
public class OrderResponse {
    private List<OrderDay> orderDayList;
}

