import axios from "axios";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Botton,
  Container,
  Button,
} from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Modal, ModalBody } from "reactstrap";

const Course = ({ course, update }) => {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("course deleted", { position: "bottom-center" });
        update(id);
      },
      (error) => {
        toast.success("something went wrong", { position: "bottom-center" });
      }
    );
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const [updatedCourse, setUpdatedCourse] = useState({
    title: course.title,
    description: course.description,
  });

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedCourse({ ...updatedCourse, [name]: value });
  };

  const handleUpdate = (id) => {
    axios.put(`${base_url}/courses/${course.id}`, updatedCourse).then(
      (response) => {
        toggleModal();
        toast.success("Course updated successfully!", {
          position: "bottom-center",
        });

        update(response.data);
        //update(id); // Assuming the API returns the updated course data
      },
      (error) => {
        toast.error("Error! Something went wrong", {
          position: "bottom-center",
        });
      }
    );
  };

  return (
    <Card>
      <CardBody className="text-center ">
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center ">
          <Button
            color="danger mi-3"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            Delete
          </Button>
          <Button color="warning ml-3" onClick={toggleModal}>
            Update
          </Button>
        </Container>
        {/* Modal for updating the course */}
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
          <ModalBody>
            <h3>Update Course</h3>
            <form>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={updatedCourse.title}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={updatedCourse.description}
                  onChange={handleInputChange}
                  className="form-control"
                ></textarea>
              </div>
            </form>
            <Button color="primary" onClick={handleUpdate}>
              Update Course
            </Button>
            <Button color="secondary" onClick={toggleModal}>
              Cancel
            </Button>
          </ModalBody>
        </Modal>
      </CardBody>
    </Card>
  );
};
export default Course;
