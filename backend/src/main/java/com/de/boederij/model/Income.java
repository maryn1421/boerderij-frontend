package com.de.boederij.model;

import lombok.Data;
import lombok.Generated;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Data
@Table(name = "income")
public class Income {

    @Id
    @GeneratedValue
    private Long Id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Double value;

    @Column(nullable = false)
    private Long incomeOptionId;

    @Column(nullable = false)
    private Date date;

    @Column(name = "user_id")
    private Long userId;
}
