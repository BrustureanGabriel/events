package com.events.server.events.server.repository;

import com.events.server.events.server.domain.EventPlant;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface EventRepository extends CrudRepository<EventPlant, Integer>{
}
