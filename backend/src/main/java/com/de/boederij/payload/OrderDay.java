package com.de.boederij.payload;

import com.de.boederij.model.Order;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
public class OrderDay {

    private Date date;
    private List<Order> orders;
}
