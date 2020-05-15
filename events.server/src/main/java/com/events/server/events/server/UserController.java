package com.events.server.events.server;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping({"/user"})
public class UserController {
    @GetMapping
    public String getHello() {
        return "HEllo world";
    }
}
