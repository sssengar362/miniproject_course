import { render } from "@testing-library/react";
import React from "react";
import { Card, CardBody } from "reactstrap";
function Header({ name, title, city }) {
  return (
    <div style={{ background: "pink", padding: "20px", margin: "10px" }}>
      <Card className="my-3 bg-warning">
        <CardBody>
          <h1 className="text-center my -3">
            Welcome to the Course Application{" "}
          </h1>
        </CardBody>
      </Card>
    </div>
  );
}
export default Header;
