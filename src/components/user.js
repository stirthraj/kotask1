import React, { Component } from "react";
import Profileimg from "../profile.jpg";

export default class user extends Component {
  render() {
    return (
      <div className="content-profile">
        <div className="heading">
          <h1>User Profile</h1>
        </div>
        <div class="row">
          <div class="column">
            <div>
              <img
                src={Profileimg}
                height="200px"
                width="300px"
                alt="profie pic"
              />
            </div>
            <div>
              <h2>Mike Andrew</h2>
              <p>michel74</p>
              <p style={{ borderBottom: "2px solid blue",width:"100%"}}>
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
