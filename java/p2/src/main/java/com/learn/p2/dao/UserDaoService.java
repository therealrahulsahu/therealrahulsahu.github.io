package com.learn.p2.dao;

import com.learn.p2.Modal.User;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserDaoService {
    private static final List<User> users = new ArrayList<>();
    static Integer counter = 3;

    static {
        users.add(new User(0, "John Doe", LocalDate.of(1990, 1, 1)));
        users.add(new User(1, "Jane Smith", LocalDate.of(1992, 2, 2)));
        users.add(new User(2, "Alice Johnson", LocalDate.of(1995, 3, 3)));
    }

    public List<User> findAll() {
        return users;
    }

    public User findById(Integer id) {
        return users.stream().filter(v->v.getId().equals(id)).findFirst().orElse(null);
    }

    public Integer save(User user) {
        user.setId(counter++);
        users.add(user);
        return user.getId();
    }

    public User deleteById(Integer id) {
        User user = findById(id);
        users.removeIf(v->v.getId().equals(id));
        return user;
    }
}
