package com.de.boederij.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "cost")
@Data
public class Cost {

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
