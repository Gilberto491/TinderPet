package com.pet.api.service;

import com.pet.api.model.Image;
import org.springframework.web.multipart.MultipartFile;

public interface ImageService {

     Image storeFile(MultipartFile file);
}
