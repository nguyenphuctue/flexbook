package com.kits.flexbook.repository;

import com.kits.flexbook.model.Post;
import com.kits.flexbook.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByUser(Optional<User> user);
}
