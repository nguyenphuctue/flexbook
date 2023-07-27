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

    @PostMapping("/login")
    public User doLogin(@RequestBody FormLogin formLogin){
        for(User user : userRepository.findAll()){
            if(user.getUsername().equals(formLogin.getUsername()) && user.getPassword().equals(formLogin.getPassword())){
                System.out.println("success");
                return user;
            }
        }

        return null;
    }

}
