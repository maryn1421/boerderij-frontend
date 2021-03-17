package com.de.boederij.model;

import lombok.Data;
import org.springframework.boot.context.properties.bind.DefaultValue;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue
    private Long Id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date date;

    @Column
    private Boolean finished;

    @Column(nullable = false)
    private Integer price;

    @Column(nullable = false)
    private Long optionType;

    @Column(name = "user_id")
    private Long userId;

}
