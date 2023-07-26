import "./App.css";
import Header from "./components/Header";
import { Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import Allcourses from "./components/Allcourses";
import AddCourses from "./components/AddCourses";
import Menus from "./components/Menus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";

function App() {
  const BtnHandle = () => {
    toast("This is my first message");
  };
  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Container>
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" Component={Home} exact />
                <Route path="/add-courses" Component={AddCourses} exact />
                <Route path="/view-courses" Component={Allcourses} exact />
                <Route path="/about" Component={About} exact />
                <Route path="/contact-us" Component={Contactus} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
