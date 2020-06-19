package com.events.server.events.server.service;
import com.events.server.events.server.domain.EventUser;
import com.events.server.events.server.repository.EventUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.google.common.collect.Lists;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class EventUserService {

    @Autowired
    private EventUserRepository eventServiceRepository;

    public EventUser save(EventUser eventUser) {
        return eventServiceRepository.save(eventUser);
    }

    public EventUser delete(int id) {
        EventUser eventUser = findById(id);
        if(eventUser != null){
            eventServiceRepository.delete(eventUser);
        }
        return eventUser;
    }

    public List<EventUser> findAll() {
        return Lists.newArrayList(eventServiceRepository.findAll());
    }

    public EventUser findById(int id) {
        return eventServiceRepository.findById(id).get();
    }

}
