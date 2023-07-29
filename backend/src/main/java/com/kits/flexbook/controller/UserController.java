package com.kits.flexbook.controller;

import com.kits.flexbook.model.User;
import com.kits.flexbook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok()
                .body(userRepository.findAll());
    }

    @PostMapping("/login")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<User> doLogin(@RequestBody FormLogin formLogin) {
        for (User user : userRepository.findAll()) {
            if (user.getUsername().equals(formLogin.getUsername()) && user.getPassword().equals(formLogin.getPassword())) {
                return ResponseEntity.ok().body(user);
            }
        }
        return ResponseEntity.ok().body(null);
    }

}
