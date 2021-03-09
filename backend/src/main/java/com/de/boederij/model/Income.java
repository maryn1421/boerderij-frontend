package com.de.boederij.model;

import lombok.Generated;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "income")
public class Income {

    @Id
    @GeneratedValue
    private Long Id;

    private String name;

    private customType type;
}
