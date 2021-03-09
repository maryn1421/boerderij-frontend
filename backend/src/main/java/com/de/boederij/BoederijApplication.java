package com.de.boederij;

import com.de.boederij.config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class BoederijApplication {

    public static void main(String[] args) {
        SpringApplication.run(BoederijApplication.class, args);
    }

}
