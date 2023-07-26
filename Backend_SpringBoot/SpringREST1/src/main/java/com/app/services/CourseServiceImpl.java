package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CourseDao;
import com.app.entities.Course;
@Service
public class CourseServiceImpl implements CourseService {
  // List<Course>list;
	@Autowired
	private CourseDao courseDao;  //dependency injection of interface-class obj  for database connectivity
	public CourseServiceImpl() {
//	list=new ArrayList<Course>();
//	list.add(new Course(145,"Prince love"," yes"));
//	list.add(new Course(146,"Roby love"," yes"));
//	list.add(new Course(147,"Mummy love"," yes"));
}

	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		return courseDao.findAll();
	}

	@Override
	public Course getCourse(long courseId) {
//		 Course c=null;
//		 
//		 for (Course course : list) {
//			if(course.getId()==courseId) {
//				c=course;
//				break;
//				
//			}
//		}
		return courseDao.findById(courseId).orElse(null);
	}
	@Override
	public Course addCourse(Course course) {
//		  list.add(course);
		courseDao.save(course);
		return course;
	}

//	@Override
//	public Course updateCousre(Course course) {
////		list.forEach(e->{  //lambda expression
////			if(e.getId()==course.getId()) {
////				e.setTitle(course.getTitle());
////				e.setDescription(course.getDescription());
////			}
////			
////			
////		});
////		
//		courseDao.save(course);
//		return course;
//	}

	@Override
	public void deleteCourse(long parseLong) {
//		// TODO Auto-generated method stub
//		list=this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
	
       Course entity= courseDao.findById(parseLong).orElse(null);	
            courseDao.delete(entity);	
	
	}

//	@Override
//	public Course updateCourse(long id, Course course) {
//		// TODO Auto-generated method stub
//		return null;
//	}
	@Override
	public Course updateCourse(long id, Course course) {
	    Course existingCourse = courseDao.findById(id).orElse(null);
	    if (existingCourse != null) {
	        // Update the properties of the existingCourse with the new values from the provided course object
	        existingCourse.setTitle(course.getTitle());
	        existingCourse.setDescription(course.getDescription());

	        // Save the updated course in the database
	        courseDao.save(existingCourse);

	        return existingCourse;
	    } else {
	        throw new RuntimeException("Course not found with ID: " + id);
	    }
	}


}
