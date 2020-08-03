package com.events.server.events.server.repository;

import com.events.server.events.server.domain.EventUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface EventUserRepository extends CrudRepository<EventUser, Integer> {

    void deleteAllByIdEvent(Integer idEvent);

    List<EventUser> findAllIdEventsByIdUser(Integer idUser);

    List<EventUser> findAllByIdEventAndIdUser(Integer eventId, Integer userId);

    List<EventUser> findAllByIdEvent(Integer eventId);
}
