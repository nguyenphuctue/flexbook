package com.kits.flexbook.controller;

import com.kits.flexbook.model.Post;
import com.kits.flexbook.model.User;
import com.kits.flexbook.repository.PostRepository;
import com.kits.flexbook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<List<Post>> getAllPosts(){
        return ResponseEntity.ok()
                .body(postRepository.findAll());
    }

    @GetMapping("/{userId}")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<List<Post>> getPostByUser(@PathVariable long userId){
        Optional<User> user = userRepository.findById(userId);
        return ResponseEntity.ok()
                .body(postRepository.findByUser(user));
    }
}
