import { useEffect } from "react";
import React from "react";
import { jumbotron, Container, Button } from "reactstrap";
const Home = () => {
  useEffect(() => {
    document.title = "Home| Shibu";
  }, []);
  return (
    <div>
      <jumbotron className="text-center">
        <h1>Learn Code with Shivendra</h1>
        <p>This application for course for connect with backend SpringBoot</p>
        <Container>
          <Button color="primary" outline>
            Click
          </Button>
        </Container>
      </jumbotron>
    </div>
  );
};
export default Home;
