package com.events.server.events.server.controller;

import com.events.server.events.server.domain.UserDTO;
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

    @GetMapping(path = {"/{id}"})
    public UserDTO findById(@PathVariable("id") Integer id) {
        return userService.findById(id);
    }

    @GetMapping(path = "/")
    public List<UserDTO> getUsers() {
        return userService.findAll();
    }

    @DeleteMapping(path = {"/{id}"})
    public void delete(@PathVariable("id") Integer id) {
        userService.delete(id);
    }

}
