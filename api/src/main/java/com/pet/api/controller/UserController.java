package com.pet.api.controller;

import com.pet.api.dto.request.UserDTO;
import com.pet.api.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", maxAge = 3600)
@Slf4j
public class UserController {

    private final UserService service;

    @GetMapping("/search/{id}")
    public ResponseEntity<?> search(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(service.search(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/save")
    @Transactional
    public ResponseEntity<?> registrar(@RequestBody @Valid UserDTO dto) {
        try {
            return ResponseEntity.status(201).body(service.save(dto));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
