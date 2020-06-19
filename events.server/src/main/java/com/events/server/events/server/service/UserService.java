package com.events.server.events.server.service;


import com.events.server.events.server.domain.UserPlant;

import com.events.server.events.server.repository.UserRepository;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserPlant save(UserPlant userPlant) {
        return userRepository.save(userPlant);
    }

    public UserPlant delete(int id) {
        UserPlant userPlant = findById(id);
        if(userPlant != null){
            userRepository.delete(userPlant);
        }
        return userPlant;
    }

    public List<UserPlant> findAll() {
        return Lists.newArrayList(userRepository.findAll());
    }

    public UserPlant findById(int id) {
        return userRepository.findById(id).get();
    }

}


