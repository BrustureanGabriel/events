package com.events.server.events.server.service;

import com.events.server.events.server.domain.EventPlant;
import com.events.server.events.server.domain.EventUser;
import com.events.server.events.server.repository.EventRepository;
import com.events.server.events.server.repository.EventUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.google.common.collect.Lists;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private EventUserRepository eventUserRepository;

    public EventPlant save(EventPlant eventPlant) {
        return eventRepository.save(eventPlant);
    }
    @Transactional
    public EventPlant delete(int id) {
        EventPlant eventPlant = findById(id);
        if(eventPlant != null){
            eventRepository.delete(eventPlant);
        }
        eventUserRepository.deleteAllByIdEvent(id);
        return eventPlant;
    }

    public List<EventPlant> findAll() {
        return Lists.newArrayList(eventRepository.findAll());
    }

    public EventPlant findById(int id) {
        return eventRepository.findById(id).get();
    }

    public List<EventPlant> findEventsUserIsJoiningByUserId(int userId){
        List<Integer> eventsIds= eventUserRepository.findAllIdEventsByIdUser(userId)
                .stream().map(EventUser::getIdEvent).collect(Collectors.toList());
        return (List<EventPlant>) eventRepository.findAllById(eventsIds);

    }

}
