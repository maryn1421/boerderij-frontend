package com.de.boederij.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "animals")
@Data
public class Animal {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private AnimalType type;

    @Column(name = "user_id")
    private Long userId;

}
