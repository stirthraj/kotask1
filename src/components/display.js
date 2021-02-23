import React, { Component } from "react";
import Chart1 from "../chart1.jpg";
import Chart2 from "../chart2.jpg";

export default class display extends Component {
  render() {
    return (
      <div className="content">
        <h1>User Profile</h1>
        <div className="row">
          <div className="column">
            <div className="col-text">
              <h2>Email Statistics</h2>
              <p>Last Campaign Performance</p>
            </div>
            <div className="col-graph">
              <img src={Chart1} alt="Graph pic" width="100%" height="200px" />
              <hr />
              <p>Campaigan sent 2 days ago</p>
            </div>
          </div>
          <div className="column">
            <div className="col-text">
              <h2>Users Behavior</h2>
              <p>24 Hours Performance</p>
            </div>
            <div className="col-graph">
              <img src={Chart2} alt="Graph pic" width="100%" height="200px" />
            </div>
            <div className="col-text">
              Open Click Click Second Time
              <hr />
              <p>Updated 3 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
