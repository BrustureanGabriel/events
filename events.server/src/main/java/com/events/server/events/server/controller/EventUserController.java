package com.events.server.events.server.controller;

import com.events.server.events.server.domain.EventUser;
import com.events.server.events.server.service.EventUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@RequestMapping({"/event-user"})
public class EventUserController {
    @Autowired
    private EventUserService eventUserService;

    @GetMapping(path ={"/{id}"})
    public EventUser findById(@PathVariable("id") Integer id){
        return eventUserService.findById(id);
    }

    @PostMapping
    public EventUser create(@RequestBody EventUser user){
        return eventUserService.save(user);
    }

    @GetMapping(path="/")
    public List<EventUser> getUsers() {
        return eventUserService.findAll();
    }
    @DeleteMapping(path ={"/{id}"})
    public EventUser delete(@PathVariable("id") Integer id) {
        return eventUserService.delete(id);
    }
}
