import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
const Menus = () => {
  return (
    <ListGroup>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/"
        action
      >
        Home
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/add-Courses"
        action
      >
        Add Course
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/view-Courses"
        action
      >
        View Course
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/about"
        action
      >
        About
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/contact-us"
        action
      >
        Contact us
      </Link>
    </ListGroup>
  );
};
export default Menus;
