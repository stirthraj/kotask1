import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class form extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="bg-primary text-light">User Profile</h1>
        <div className="row">
          <div className="column">
            <form>
              <label>Full Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label>Email</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              <label>Select fruit</label>
              <select id="country" name="country">
                <option>Grapefruit</option>
              </select>
              <label>Message</label>
              <textarea id="subject" name="subject" placeholder=""></textarea>
              {/* <input type="submitnpm" value="Submit" /> */}
              <Button variant="primary" size="lg">
                Submit
              </Button>{" "}
            </form>
          </div>
          <div className="column">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Fruit</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Anshul Gupta</td>
                  <td>abcd@test.com</td>
                  <td>lime</td>
                  <td>hi</td>
                </tr>
                <tr>
                  <td>Anshul Gupta</td>
                  <td>abcd@test.com</td>
                  <td>lime</td>
                  <td>hi</td>
                </tr>
                <tr>
                  <td>Anshul Gupta</td>
                  <td>abcd@test.com</td>
                  <td>lime</td>
                  <td>hi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
