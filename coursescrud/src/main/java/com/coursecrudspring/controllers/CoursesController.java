package com.coursecrudspring.controllers;

import com.coursecrudspring.domain.Courses;
import com.coursecrudspring.repository.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping("/api/courses")
public class CoursesController {

    @Autowired
    private final CourseRepository repository;

    @GetMapping
    public List<Courses> list() {
        return repository.findAll();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Courses create(@RequestBody Courses curso) {
        return repository.save(curso);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Courses> procurar(@PathVariable Long id) {
        Optional<Courses> cursoOptional = repository.findById(id);
        return cursoOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> updateCourse(@PathVariable Long id, @RequestBody Courses curso) {
        return repository.findById(id)
                .map(found -> {
                    found.setName(curso.getName());
                    found.setCategory(curso.getCategory());
                    repository.save(found); // Save the changes
                    return ResponseEntity.ok(found); // Return updated course
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return repository.findById(id)
                .map(found -> {
                    repository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }



}


