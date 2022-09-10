package com.pet.api.dto.request;

import com.pet.api.model.Pet;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ImageDTO {

    private String fileName;
    private String fileType;
    private byte[] data;
    private Pet pet;
}
