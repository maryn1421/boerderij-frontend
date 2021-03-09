package com.de.boederij.payload;


import lombok.Data;

@Data
public class AuthResponse {
    private String accessToken;
    private String tokenType = "Bearer";
    private Long userId;

    public AuthResponse(String accessToken, Long userId) {
        this.accessToken = accessToken;
        this.userId = userId;
    }

}