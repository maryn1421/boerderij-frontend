package com.de.boederij.payload;

import com.de.boederij.model.AnimalType;
import lombok.Data;

@Data
public class AnimalRequest {

    private Long userId;

    private AnimalType type;

}
