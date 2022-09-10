package com.pet.api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@ToString
public class Image implements Serializable {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String fileName;

    private String fileType;

    @Lob
    @JsonIgnore
    private byte[] data;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "id_pet")
    private Pet pet;
}
