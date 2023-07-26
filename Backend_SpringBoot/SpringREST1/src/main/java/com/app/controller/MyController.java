package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Course;
import com.app.services.CourseService;
@RestController
@CrossOrigin(origins = "*")

public class MyController {
	@Autowired
	private CourseService courseService;  //dependency injection of interface-class obj
	@GetMapping("/home")
       public String home() {
    	   return "Hii Prince Boss July";
       }
	//get courses  -method
	@GetMapping("/courses")
	public List<Course>getCourses(){
		return this.courseService.getCourses();
		
	}
	//get single id courses
	@GetMapping("courses/{courseId}")
	public Course getCourse(@PathVariable String courseId ) {
		return this.courseService.getCourse(Long.parseLong(courseId));
	}
	
	
	
	//add course
	@PostMapping("/courses")
	public Course addCousre(@RequestBody Course course) {
		return this.courseService.addCourse(course);
	}
	//Update course using PUT request
//	@PutMapping("/courses")
//	public Course updateCousre(@RequestBody Course course) {
//		return this.courseService.updateCousre(course);
//	}
	@PutMapping("/courses/{id}")
	public Course updateCourse(@PathVariable long id, @RequestBody Course course) {
	    // Pass the 'id' to the service layer to update the course
	    return this.courseService.updateCourse(id, course);
	}

	//delete the Course
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus>deleteCourse(@PathVariable String courseId){
		
		try {
			this.courseService.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			return new ResponseEntity<HttpStatus>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		
	}
}
