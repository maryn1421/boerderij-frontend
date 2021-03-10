package com.de.boederij.payload;

import com.de.boederij.model.customType;
import lombok.Data;

@Data
public class CostRequest {

    private String name;

    private Double value;

    private customType type;

    private Long userId;

}
