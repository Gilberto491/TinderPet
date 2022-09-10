package com.pet.api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pet.api.model.enumerations.EnumGender;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Data
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@ToString
public class Pet implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String typePet;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private EnumGender gender;

    private Long yearPet;
    private String sizePet;

    @OneToMany(mappedBy = "pet")
    private List<Image> imageList;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "id_user")
    private User user;
}
