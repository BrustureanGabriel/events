package com.events.server.events.server.service;

import com.events.server.events.server.domain.EventUser;
import com.events.server.events.server.domain.User;
import com.events.server.events.server.domain.UserDTO;
import com.events.server.events.server.repository.EventUserRepository;
import com.events.server.events.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EventUserRepository eventUserRepository;

    @Transactional
    public void delete(Integer id) {
        userRepository.deleteById(id);
        List<EventUser> eventUserLinks = eventUserRepository.findAllIdEventsByIdUser(id);
        eventUserRepository.deleteAll(eventUserLinks);
    }

    public List<UserDTO> findAll() {
        return userRepository.findAll().stream().map(this::mapToUserDTO).collect(Collectors.toList());
    }

    public UserDTO findById(Integer id) {
        return userRepository.findById(id).map(this::mapToUserDTO).orElse(null);
    }

    private UserDTO mapToUserDTO(User user) {
        return new UserDTO(user.getId(), user.getUsername(),
                user.getEmail(), user.getRoles(),
                user.getFirstName(), user.getLastName(),
                user.getPhoneNumber());
    }
}
