package com.pet.api.service.impl;

import com.pet.api.model.Image;
import com.pet.api.repository.ImageRepository;
import com.pet.api.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {

    private final ImageRepository repository;
    @Value("${archive.size}")
    private String archiveSize;

    @Override
    public Image storeFile(MultipartFile file) {

        String fileName = StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));

        try {
            Image dbFile = Image
                    .builder()
                    .fileName(fileName)
                    .fileType(file.getContentType())
                    .data(file.getBytes())
                    .build();

            ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/downloadFile/")
                    .path(dbFile.getId())
                    .toUriString();

            validateSize(file);

            return repository.save(dbFile);
        } catch (IOException ex) {
            throw new RuntimeException("could not find archive " + fileName + ". please, try again!", ex);
        }
    }

    private void validateSize(MultipartFile file) {
        if (file.getSize() == Integer.parseInt(archiveSize)) {
            throw new RuntimeException("very large file");
        }
    }
}
