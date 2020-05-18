package com.events.server.events.server.controller;

import com.events.server.events.server.Event;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@RequestMapping({"/event"})
public class EventController {
    @GetMapping(path="/")
    public List<Event> getEvents() {
        List<Event> events= new ArrayList<>();
        events.add(new Event(1,"Ev1"));
        events.add(new Event(2,"Ev2"));
        events.add(new Event(3,"Ev3"));
        events.add(new Event(4,"Ev4"));
        events.add(new Event(5,"Ev5"));

        return events;
    }

}
