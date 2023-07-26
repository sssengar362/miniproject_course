import axios from "axios";

import base_url from "../api/bootapi";
import React, { useEffect, useState } from "react";
import { FormGroup, Form, Input, Container, Button } from "reactstrap";
import { toast } from "react-toastify";
const AddCourses = () => {
  useEffect(() => {
    document.title = "Add Courses";
  }, []);
  const [course, setCourse] = useState({});
  //form handler function
  const handleForm = (e) => {
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  };
  //creation function to post data to the server
  const postDataToServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (success) => {
        console.log(Response);
        console.log("success");
        toast.success("Course has been successfully added", {
          position: "bottom-center",
        });
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.success("Error! Something went wrong", {
          position: "bottom-center",
        });
      }
    );
  };
  return (
    <div>
      <h1 className="text-center my -3">Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 200 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center my-3">
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button color="danger -ml-2" type="reset">
            Clear
          </Button>
        </Container>
      </Form>
    </div>
  );
};
export default AddCourses;
