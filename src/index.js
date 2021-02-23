import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,Link, Route, Switch} from 'react-router-dom'
import Dashboard from '../src/components/display'
import User from '../src/components/user'
import Form from '../src/components/form'
import Map from '../src/components/map'
import './App.css'


export default class App extends Component {
    render() {
        return (
          <div className="main">
            <BrowserRouter>
              <div className="menu">
                <div>
                  <button>toggle</button>
                </div>
                <Link to="/a">
                  <div>DashBoard</div>
                </Link>
                <Link to="/b">
                  <div>
                    User Profile
                  </div>
                </Link>
                <Link to="/c">
                  <div>Form</div>
                </Link>
                <Link to="/d">
                  <div>Map</div>
                </Link>
              </div>
              <Switch>
                <Route path="/a">
                  <Dashboard />
                </Route>
                <Route path="/b">
                  <User />
                </Route>
                <Route path="/c">
                  <Form />
                </Route>
                <Route path="/d">
                  <Map />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        );
    }
}

ReactDOM.render(<App/>,
  document.getElementById('root')
);
