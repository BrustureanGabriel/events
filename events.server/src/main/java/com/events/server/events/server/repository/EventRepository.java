package com.events.server.events.server.repository;

import com.events.server.events.server.domain.Event;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;

@RepositoryRestResource
public interface EventRepository extends CrudRepository<Event, Integer>{
    Collection<Event> findAllByOwnerId(Integer ownerId);
}
