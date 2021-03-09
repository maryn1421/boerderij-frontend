package com.de.boederij.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "cost")
public class Cost {

    @Id
    @GeneratedValue
    private Long Id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String value;

    @Column(nullable = false)
    private customType type;

    @Column(nullable = false)
    private Date date;

    @Column(name = "user_id")
    private Long userId;
}
