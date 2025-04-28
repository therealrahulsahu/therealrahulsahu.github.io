package com.learn.p2.Modal;

import java.time.LocalDate;

import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Integer id;

    @Size(min=2, message = "Name should have 2 characters")
    private String name;

    @Past(message = "date should be in past")
    private LocalDate date;
}
