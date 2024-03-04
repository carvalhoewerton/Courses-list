package com.coursecrudspring.repository;

import com.coursecrudspring.domain.Courses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.lang.model.element.Name;

@Repository
public interface CourseRepository extends JpaRepository<Courses, Long> {

}
