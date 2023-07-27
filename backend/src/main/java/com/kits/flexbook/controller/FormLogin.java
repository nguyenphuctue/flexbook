package com.kits.flexbook.controller;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.PrimitiveIterator;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FormLogin {
    private String username;
    private String password;
}
