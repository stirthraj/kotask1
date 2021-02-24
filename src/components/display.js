import React, { Component } from "react";

import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";


const data01 = [
  { name: "Open", value: 40 },
  { name: "Bounce", value: 40 },
  { name: "Unsubscribe", value: 20 }
];

const data = [
  {
    name: "9:00AM",
    uv: 400,
    pv: 240,
    amt: 240,
  },
  {
    name: "12:00AM",
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: "3:00PM",
    uv: 200,
    pv: 980,
    amt: 229,
  },
  {
    name: "6:00PM",
    uv: 278,
    pv: 390,
    amt: 200,
  },
  {
    name: "9:00PM",
    uv: 189,
    pv: 480,
    amt: 218,
  },
  {
    name: "12:00PM",
    uv: 239,
    pv: 380,
    amt: 250,
  },
  {
    name: "3:00AM",
    uv: 349,
    pv: 430,
    amt: 210,
  },
  {
    name: "6:00AM",
    uv: 340,
    pv: 430,
    amt: 210,
  },
];

export default class display extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>User Profile</h1>
        <div className="row">
          <div className="column">
            <div className="col-text">
              <h2>Email Statistics</h2>
              <p>Last Campaign Performance</p>
            </div>
            <div className="col-graph">
              {/* <img src={Chart1} alt="Graph pic" width="100%" height="200px" /> */}
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />
                  <Tooltip />
                  
                </PieChart>
              </ResponsiveContainer>
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
              {/* <img src={Chart2} alt="Graph pic" width="100%" height="200px" /> */}
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
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
