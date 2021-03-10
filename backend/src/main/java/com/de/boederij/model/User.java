package com.de.boederij.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
})
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    private String imageUrl;

    @Column(nullable = false)
    private Boolean emailVerified = false;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_animals",
    joinColumns = @JoinColumn(name = "animal_id"),
    inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<Animal> animals;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_costs",
        joinColumns = @JoinColumn(name = "cost_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<Cost> costs;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_incomes",
        joinColumns = @JoinColumn(name = "income_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<Income> incomes;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_orders",
        joinColumns = @JoinColumn(name = "order_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<Order> orders;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_income_options",
        joinColumns = @JoinColumn(name = "incomeOption_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<IncomeOption> incomeOptions;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_cost_options",
        joinColumns = @JoinColumn(name = "costOption_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<CostOption> costOptions;

    @JsonIgnore
    private String password;

    @NotNull
    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    private String providerId;
}
