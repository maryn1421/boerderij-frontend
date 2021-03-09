package com.de.boederij.payload;

import lombok.Data;

@Data
public class OrderRequest {

    private String name;

    private Long userId;

}
