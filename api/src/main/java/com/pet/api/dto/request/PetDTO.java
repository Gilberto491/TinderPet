package com.pet.api.dto.request;

import com.pet.api.model.Image;
import com.pet.api.model.User;
import com.pet.api.model.enumerations.EnumGender;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
@Builder
public class PetDTO {

    @NotBlank
    private String name;
    @NotBlank
    private String description;
    @NotBlank
    private String typePet;
    @NotBlank
    private EnumGender gender;
    private Long yearPet;
    private String sizePet;
    private List<Image> imageList;
    private User user;
}
