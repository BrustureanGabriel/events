package com.events.server.events.server.service;

import com.events.server.events.server.Event;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {
    public Event save(Event event) {
        return null;
        //return repository.save(event);
    }

    public Event delete(int id) {
        Event event = findById(id);
        if(event != null){
            return null;
            //repository.delete(event);
        }
        return event;
    }

    public List<Event> findAll() {
        return null;
        //return Lists.newArrayList(repository.findAll());
    }

    public Event findById(int id) {
        return null;
        //return repository.findById(id).get();
    }

}
