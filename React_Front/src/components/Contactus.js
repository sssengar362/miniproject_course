import React, { useEffect } from "react";
import { Table } from "reactstrap";
const Contactus = () => {
  useEffect(() => {
    document.title = "Contact us";
  }, []);
  return (
    <div>
      <h1 className="text-center my-3" color="pink">
        For Any Query Connect With Us
      </h1>
      <Table bordered>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Conact No</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <th scope="row">1</th>
            <td>Shivendra</td>
            <td>Singh</td>
            <td>7000916077</td>
            <td>sssengar362@gmail.com</td>
          </tr>
          <tr className="text-center">
            <th scope="row">2</th>
            <td>Sachiv</td>
            <td>Singh</td>
            <td>8770565151</td>
            <td>sachiv22@gmail.com</td>
          </tr>
          <tr className="text-center">
            <th scope="row">3</th>
            <td>Prince</td>
            <td>Singh</td>
            <td>8989515353</td>
            <td>shivendras2284@gmail.com</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Contactus;
