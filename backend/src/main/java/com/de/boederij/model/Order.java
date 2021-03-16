package com.de.boederij.model;

import lombok.Data;
import javax.persistence.*;
import java.sql.Timestamp;
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

    @Column(name = "user_id")
    private Long userId;

}
