package com.events.server.events.server.service;

import com.events.server.events.server.domain.EventUser;
import com.events.server.events.server.repository.EventUserRepository;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventUserService {

    @Autowired
    private EventUserRepository eventUserRepository;

    public EventUser save(EventUser eventUser) {
        return eventUserRepository.save(eventUser);
    }

    public EventUser delete(int id) {
        EventUser eventUser = findById(id);
        if (eventUser != null) {
            eventUserRepository.delete(eventUser);
        }
        return eventUser;
    }

    public List<EventUser> findAll() {
        return Lists.newArrayList(eventUserRepository.findAll());
    }

    public EventUser findById(int id) {
        return eventUserRepository.findById(id).get();
    }

    public boolean isUserAlreadyRegistered(Integer eventId, Integer userId) {
        return !eventUserRepository.findAllByIdEventAndIdUser(eventId, userId).isEmpty();
    }

    public void abandonEvent(Integer eventId, Integer userId) {
        this.eventUserRepository.deleteAll(
                this.eventUserRepository.findAllByIdEventAndIdUser(eventId, userId));
    }

    public Integer findAllByEventId(Integer eventId) {
        return this.eventUserRepository.findAllByIdEvent(eventId).size();
    }
}
