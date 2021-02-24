import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,Link, Route, Switch} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
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
          <div id="menu" className="menu">
            <div>
              <button onClick={this.Effect}>toggle</button>
            </div>
            <Link to="/">
              <div>DashBoard</div>
            </Link>
            <Link to="/b">
              <div>User Profile</div>
            </Link>
            <Link to="/c">
              <div>Form</div>
            </Link>
            <Link to="/d">
              <div>Map</div>
            </Link>
          </div>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/b">
              <User />
            </Route>
            <Route exact path="/c">
              <Form />
            </Route>
            <Route exact path="/d">
              <Map />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  Effect = () => {
    
    const menu=document.getElementById("menu");
    if(menu.clientWidth!==80){
     menu.style.width = "80px";
    }
    else{
      menu.style.width = "120px";
    }
    
  };
}

ReactDOM.render(<App/>,
  document.getElementById('root')
);
