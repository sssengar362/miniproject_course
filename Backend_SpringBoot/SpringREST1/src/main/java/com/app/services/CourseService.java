package com.app.services;

import java.util.List;

import com.app.entities.Course;
//abstract method
public interface CourseService {
	public List<Course>getCourses();//for loose coupling  
	public Course getCourse(long courseId);//methods- without body 
	public Course addCourse(Course course);
	public Course updateCourse(long id,Course course);
	public void deleteCourse(long courseId);

	


} 
