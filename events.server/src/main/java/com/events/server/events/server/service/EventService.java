package com.events.server.events.server.service;

import com.events.server.events.server.domain.Event;
import com.events.server.events.server.domain.EventUser;
import com.events.server.events.server.repository.EventRepository;
import com.events.server.events.server.repository.EventUserRepository;
import com.google.common.collect.Sets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private EventUserRepository eventUserRepository;

    public Event save(Event event) {
        return eventRepository.save(event);
    }

    @Transactional
    public Event delete(Integer id) {
        Event event = findById(id);
        if (event != null) {
            eventRepository.delete(event);
        }
        eventUserRepository.deleteAllByIdEvent(id);
        return event;
    }

    public Set<Event> findAll() {
        return Sets.newHashSet(eventRepository.findAll()).stream().filter(event -> {
            return event.getPlannedDate().after(new Date());
        }).collect(Collectors.toSet());
    }

    public Event findById(Integer id) {
        return eventRepository.findById(id).get();
    }

    public Set<Event> findAllEventsForUser(Integer userId) {
        List<Integer> eventsIds = eventUserRepository.findAllIdEventsByIdUser(userId)
                .stream().map(EventUser::getIdEvent).collect(Collectors.toList());
        Set<Event> allJoinedEvents = (Set<Event>) eventRepository.findAllById(eventsIds);
        allJoinedEvents.addAll(findAll());
        return allJoinedEvents;
    }

    public Set<Event> findAllEventsCreatedByUser(Integer userId) {
        return Sets.newHashSet(eventRepository.findAllByOwnerId(userId));
    }


    public Set<Event> findAllPassedEventsForUser(Integer userId) {
        return Sets.newHashSet(eventRepository.findAll()).stream().filter(event -> {
            return event.getPlannedDate().before(new Date());
        }).collect(Collectors.toSet());
    }
}
