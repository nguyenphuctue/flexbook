package com.kits.flexbook.controller;

import com.kits.flexbook.model.User;
import com.kits.flexbook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/login")
    public User doLogin(@RequestParam String username, @RequestParam String password){
        for(User user : userRepository.findAll()){
            if(user.getUsername().equals(username) && user.getPassword().equals(password)){
                System.out.println("success");
                return user;
            }
        }

        return null;
    }

}
