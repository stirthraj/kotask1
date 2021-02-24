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
            <button onClick={this.Effect}>
              <i class="fas fa-toggle-on"></i>
              <span className="link-text">Shrink</span>
            </button>
            <Link to="/">
              <i className="fas fa-tachometer-alt"></i>
              <span className="link-text">DashBoard</span>
            </Link>
            <Link to="/b">
              <i className="fas fa-id-badge"></i>
              <span className="link-text">User Profile</span>
            </Link>
            <Link to="/c">
              <i className="fab fa-wpforms"></i>
              <span className="link-text">Form</span>
            </Link>
            <Link to="/d">
              <i className="fas fa-map-marker-alt"></i>
              <span className="link-text">Map</span>
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
    const linktext = document.getElementsByClassName("link-text");
    // alert(menu.clientWidth);
    if(menu.clientWidth!==50){
     menu.style.width = "50px";
          linktext[0].style.display = "none";
          linktext[1].style.display = "none";
          linktext[2].style.display = "none";
          linktext[3].style.display = "none";
          linktext[4].style.display = "none";
          
    }
    else{
      menu.style.width = "150px";
      linktext[0].style.display = "block";
      linktext[1].style.display = "block";
      linktext[2].style.display = "block";
      linktext[3].style.display = "block";
      linktext[4].style.display = "block";
    }
    
  };
}

ReactDOM.render(<App/>,
  document.getElementById('root')
);
