package com.de.boederij.payload;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import com.de.boederij.payload.OrderDay;


@Data
public class OrderResponse {

    public OrderResponse() {
        this.orderDayList = new ArrayList<>();
    }

    private List<OrderDay> orderDayList;
}

