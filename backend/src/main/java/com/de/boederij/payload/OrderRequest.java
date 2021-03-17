package com.de.boederij.payload;

import lombok.Data;

import java.util.Date;

@Data
public class OrderRequest {

    private String name;

    private Long userId;

    private Date date;

    private Integer price;

    private Long typeId;

}
