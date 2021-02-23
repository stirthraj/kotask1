import React, { Component } from "react";
import Profileimg from "../profile.jpg";
import Pp from "../pp.jpg"

export default class user extends Component {
  render() {
    return (
      <div className="content-profile">
        <div className="heading">
          <h1>User Profile</h1>
        </div>
        <div className="row-flex">
          <div className="col-flex">
              <img
                src={Profileimg}
                alt="profie pic"
                width="100%"
              />
              <div className="profile-text">
                <img id="profilepic" src={Pp} height="100px" width="120px" />
                <h2>Mike Andrew</h2>
                <p>michel74</p>
                <p>
                  Lamborgini Mercy Yourchick she so thirsty I'm in that two seat
                  Lambo
                </p>
              </div>
          </div>
        </div>

      </div>
    );
  }
}
