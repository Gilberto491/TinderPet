package com.pet.api.model.enumerations;

public enum EnumGender {
    MALE("Male"),
    FEMALE("Female");

    private final String descricao;

    EnumGender(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }
}
