package com.de.boederij.model;

import lombok.Generated;

import javax.persistence.*;

@Entity
@Table(name = "income")
public class Income {

    @Id
    @GeneratedValue
    private Long Id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private customType type;

    @Column(name = "user_id")
    private Long userId;
}
