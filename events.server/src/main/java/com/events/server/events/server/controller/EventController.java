package com.events.server.events.server.controller;

import com.events.server.events.server.domain.Event;
import com.events.server.events.server.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@RequestMapping({"/event"})
public class EventController {
    @Autowired
    private EventService eventService;

    @GetMapping(path ={"/{id}"})
    public Event findById(@PathVariable("id") Integer id){
        return eventService.findById(id);
    }

    @PostMapping(path="/")
    public Event create(@RequestBody Event event){
        return eventService.save(event);
    }

    @GetMapping(path="/")
    public Set<Event> getEvents() {
        return eventService.findAll();
    }
    @DeleteMapping(path ={"/{id}"})
    public Event delete(@PathVariable("id") Integer id) {
        return eventService.delete(id);
    }

    @GetMapping(path="/user/{userId}")
    public Set<Event> findAllEventsForUser(@PathVariable("userId") Integer userId){
        return eventService.findAllEventsForUser(userId);
    }

    @GetMapping(path="/created/{userId}")
    public Set<Event> findAllEventsCreatedByUser(@PathVariable("userId") Integer userId){
        return eventService.findAllEventsCreatedByUser(userId);
    }

    @GetMapping(path="/passed/{userId}")
    public Set<Event> findAllPassedEventsForUser(@PathVariable("userId") Integer userId){
        return eventService.findAllPassedEventsForUser(userId);
    }
}
