import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,Link, Route, Switch} from 'react-router-dom'
import Dashboard from './display'
import User from './user'
import Form from './form'
import Map from './map'


export default class menu extends Component {
    render() {
        return (
            <div className="main">
                
                <BrowserRouter>
                <div className="menu">
                <div><button>toggle</button></div>
                <Link to="/a"><div>DashBoard</div></Link>
                <Link to="/b"><div>User Profile</div></Link>
                <Link to="/c"><div>Form</div></Link>
                <Link to="/d"><div>Map</div></Link>
                </div>
                 <Switch>
                    <Route path="/a"><Dashboard/></Route>
                    <Route path="/b"><User/></Route>
                    <Route path="/c"><Form/></Route>
                    <Route path="/d"><Map/></Route>
                </Switch>

                </BrowserRouter>

               
                
            </div>
        )
    }
}
