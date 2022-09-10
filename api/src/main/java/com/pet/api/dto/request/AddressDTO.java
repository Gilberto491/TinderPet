package com.pet.api.dto.request;

import com.pet.api.model.User;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@Builder
public class AddressDTO {

    @NotBlank
    private int cep;
    @NotBlank
    private String state;
    @NotBlank
    private String city;
    @NotBlank
    private String street;
    @NotBlank
    private String district;
    private String additional;
    private User user;
}
