package com.de.boederij.model;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

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
    private Double value;

    @Column(nullable = false)
    private Long optionId;

    @Column(nullable = false)
    private Date date;

    @Column(name = "user_id")
    private Long userId;
}
