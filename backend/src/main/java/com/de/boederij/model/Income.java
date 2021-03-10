package com.de.boederij.model;

import lombok.Data;
import lombok.Generated;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Data
@Table(name = "income")
@Data
public class Income {

    @Id
    @GeneratedValue
    private Long Id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Double value;

    @Column(nullable = false)
    private customType type;

    @Column(nullable = false)
    private Timestamp date;

    @Column(name = "user_id")
    private Long userId;
}
