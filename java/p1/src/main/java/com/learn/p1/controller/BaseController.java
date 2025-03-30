package com.learn.p1.controller;

import com.learn.p1.bean.Student;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
public class BaseController {

    @RequestMapping("/get-students")
    public List<Student> getStudentList() {
        List<Student> studentList = new ArrayList<>();
        studentList.add(new Student(1, "John Doe", "Computer Science"));
        studentList.add(new Student(2, "Jane Smith", "Mathematics"));
        studentList.add(new Student(3, "Emily Johnson", "Physics"));
        studentList.add(new Student(4, "Michael Brown", "Chemistry"));
        return studentList;
    }
}
