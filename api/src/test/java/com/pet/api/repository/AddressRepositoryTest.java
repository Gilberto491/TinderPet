package com.pet.api.repository;

import com.pet.api.model.Address;
import org.junit.Assert;
import org.junit.Test;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

@DataJpaTest
@RunWith(SpringRunner.class)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ActiveProfiles("test")
public class AddressRepositoryTest {

    @Autowired
    private AddressRepository repository;
    private Address address;

    @BeforeEach
    public void setup() {
        address = Address
                .builder()
                .additional("Casa")
                .cep(72308205)
                .city("Brasília")
                .district("Samambaia Sul (Samambaia)")
                .state("DF")
                .street("Quadra QN 314 Conjunto 5")
                .build();
        repository.save(address);
    }

    @AfterEach
    public void clean() {
        repository.deleteAll();
    }

    @Test
    public void saveAddressAndReturnId() {
        setup();
        Assert.assertTrue(repository.existsById(address.getId()));
    }
}
