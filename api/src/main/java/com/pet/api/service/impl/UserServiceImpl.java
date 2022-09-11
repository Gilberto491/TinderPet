package com.pet.api.service.impl;

import com.pet.api.dto.request.UserDTO;
import com.pet.api.model.User;
import com.pet.api.repository.UserRepository;
import com.pet.api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository repository;

    @Override
    public User search(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new RuntimeException("user not found")
        );
    }

    @Override
    public User save(UserDTO dto) {
        User user = User
                .builder()
                .addressList(dto.getAddressList())
                .cpf(dto.getCpf())
                .email(dto.getEmail())
                .name(dto.getName())
                .image(dto.getImage())
                .password(dto.getPassword())
                .petList(dto.getPetList())
                .build();
        return repository.save(user);
    }
}
