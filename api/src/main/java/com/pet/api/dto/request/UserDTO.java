package com.pet.api.dto.request;

import com.pet.api.model.Address;
import com.pet.api.model.Image;
import com.pet.api.model.Pet;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
@Builder
public class UserDTO {

    @NotBlank
    private String name;
    @NotBlank
    private String email;
    @NotBlank
    private int cpf;
    @NotBlank
    private String password;
    private List<Address> addressList;
    private Image image;
    private List<Pet> petList;
}
