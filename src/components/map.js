import React, { Component } from 'react'
import Mapimg from '../map.jpg'

export default class map extends Component {
    render() {
        return (
            <div className="content">
                <h1>User Profile</h1>
                <div>
                    <img src={Mapimg} height="100%" width="100%" alt="map"/>
                </div>
            </div>
        )
    }
}
