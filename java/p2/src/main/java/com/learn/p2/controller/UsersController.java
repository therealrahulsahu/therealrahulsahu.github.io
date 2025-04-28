package com.learn.p2.controller;

import com.learn.p2.Exception.UserNotFoundException;
import com.learn.p2.Modal.User;
import com.learn.p2.dao.UserDaoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class UsersController {

    @Autowired
    private UserDaoService userDaoService;

//    @GetMapping("/entry")
//    public String getEntry() {
//        return "Hello, this is the EntryController!";
//    }
//
//    @GetMapping("/entry/{name}")
//    public String getName(@PathVariable String name) {
//        return "Hello, "+ name + "!";
//    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return userDaoService.findAll();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable Integer id) throws UserNotFoundException{
        User user = userDaoService.findById(id);
        if(user==null){
            throw new UserNotFoundException("User not found with id: " + id);
        }
        return user;
    }

    @PostMapping("/users")
    public ResponseEntity<Object> createUser(@Valid @RequestBody User user) {
        Integer nyId = userDaoService.save(user);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(nyId)
                .toUri();
        return ResponseEntity.created(location).build();
    }

    @DeleteMapping("/users/{id}")
    public User deleteUserById(@PathVariable Integer id) throws UserNotFoundException{
        User user = userDaoService.deleteById(id);
        if(user==null){
            throw new UserNotFoundException("User not found with id: " + id);
        }
        return user;
    }
}
