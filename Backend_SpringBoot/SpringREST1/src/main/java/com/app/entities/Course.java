package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Course {
@Id
private long id;
private String title;

private String description;
public Course() {  //parameterless ctor

}
public Course(long id, String title, String description) {  //parameterized
	
	this.id = id;
	this.title = title;
	this.description = description;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}

public String getTitle() {
	return title;
}

public void setTitle(String title) {
	this.title = title;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
@Override
public String toString() {
	return "Course [id=" + id + ", title=" + title + ", description=" + description + "]";
}



}
