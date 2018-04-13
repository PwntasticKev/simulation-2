import React, { Component } from 'react'
import House from '../House/House'
import axios from 'axios'
// import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    }
  }
getHouses() {
  axios.get('/api/houses')

}

  render() {
    return (
      <div>
        <House />
        {this.state.houses.map(house => {
          return <div key={house}>{this.state.house}</div>
        })}
        </div>
      
        )
  }
  }