package com.de.boederij.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cost")
public class Cost {

    @Id
    @GeneratedValue
    private Long Id;

    private String name;

    private customType type;
}
