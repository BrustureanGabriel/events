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

    @GetMapping(path = {"/{eventId}"})
    public Integer findAllByEventId(@PathVariable("eventId") Integer id) {
        return eventUserService.findAllByEventId(id);
    }

    @GetMapping(path = {"/{eventId}/{userId}"})
    public boolean isUserAlreadyRegistered(@PathVariable("eventId") Integer eventId, @PathVariable("userId") Integer userId) {
        return eventUserService.isUserAlreadyRegistered(eventId, userId);
    }

    @DeleteMapping(path = {"/{eventId}/{userId}"})
    public void abandonEvent(@PathVariable("eventId") Integer eventId, @PathVariable("userId") Integer userId) {
        eventUserService.abandonEvent(eventId, userId);
    }

    @PostMapping
    public EventUser create(@RequestBody EventUser user) {
        return eventUserService.save(user);
    }

    @GetMapping(path = "/")
    public List<EventUser> getUsers() {
        return eventUserService.findAll();
    }

    @DeleteMapping(path = {"/{id}"})
    public EventUser delete(@PathVariable("id") Integer id) {
        return eventUserService.delete(id);
    }
}
