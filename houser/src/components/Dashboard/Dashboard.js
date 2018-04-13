import React, { Component } from 'react'
import House from '../House/House'
import axios from 'axios'
// import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: [1,5]
    }
    //BINDS//
    this.getHouses = this.getHouses.bind(this)
    //Bind
  }


  componentDidMount() {
    this.getHouses()
  }
getHouses() {
  axios.get('/api/houses').then(res => {
    houses: res.data
  })
 
}


render() {
  let houses = this.state.houses.map(house => {
     return( <div key={house.id}>{house}</div>
  )})
    return <div>
        <House houseList={houses} />
        
      </div>
  }
  }