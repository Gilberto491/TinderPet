package com.pet.api.service;

import com.pet.api.dto.request.UserDTO;
import com.pet.api.model.User;

public interface UserService {

    User search(Long id);
    User save(UserDTO dto);
}
