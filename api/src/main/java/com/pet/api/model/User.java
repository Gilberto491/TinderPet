package com.pet.api.model;

import lombok.*;
import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Data
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "client")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true, length = 11)
    private int cpf;

    @Column(nullable = false)
    @Range(min = 6, message = "short password")
    private String password;

    @OneToMany(mappedBy = "user")
    private List<Address> addressList;

    @OneToOne
    @JoinColumn(name = "id_image")
    private Image image;

    @OneToMany(mappedBy = "user")
    private List<Pet> petList;

}
