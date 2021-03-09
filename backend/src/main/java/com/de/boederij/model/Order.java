package com.de.boederij.model;

import lombok.Generated;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue
    private Long Id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Date date;

    @Column(name = "user_id")
    private Long userId;

}
