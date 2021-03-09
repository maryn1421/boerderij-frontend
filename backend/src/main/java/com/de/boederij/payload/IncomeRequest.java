package com.de.boederij.payload;

import com.de.boederij.model.customType;
import lombok.Data;

@Data
public class IncomeRequest {

    private String name;

    private Double value;

    private customType type;

    private Long userId;

}
