package com.events.server.events.server.controller;

import com.events.server.events.server.domain.EventPlant;
import com.events.server.events.server.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@RequestMapping({"/event"})
public class EventController {
    @Autowired
    private EventService eventService;

    @GetMapping(path ={"/{id}"})
    public EventPlant findById(@PathVariable("id") Integer id){
        return eventService.findById(id);
    }

    @PostMapping(path="/")
    public EventPlant create(@RequestBody EventPlant eventPlant){
        return eventService.save(eventPlant);
    }

    @GetMapping(path="/")
    public List<EventPlant> getEvents() {

        return eventService.findAll();
    }
    @DeleteMapping(path ={"/{id}"})
    public EventPlant delete(@PathVariable("id") Integer id) {
        return eventService.delete(id);
    }

    @GetMapping(path="/user/{userId}")
    public List<EventPlant> findEventsUserIsJoiningByUserId(@PathVariable("userId") Integer userId){
        return eventService.findEventsUserIsJoiningByUserId(userId);
    }


}
