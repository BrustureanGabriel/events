package com.events.server.events.server.controller;

import com.events.server.events.server.domain.UserPlant;
import com.events.server.events.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@RequestMapping({"/user"})
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping(path ={"/{id}"})
    public UserPlant findById(@PathVariable("id") Integer id){
        return userService.findById(id);
    }

    @PostMapping
    public UserPlant create(@RequestBody UserPlant userPlant){
        return userService.save(userPlant);
    }

    @GetMapping(path="/")
    public List<UserPlant> getUsers() {
        return userService.findAll();
    }
    @DeleteMapping(path ={"/{id}"})
    public UserPlant delete(@PathVariable("id") Integer id) {
        return userService.delete(id);
    }

}
