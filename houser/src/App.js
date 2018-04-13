import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Wizard from './components/Wizard/Wizard'
import routes from './routes'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return <div className="App">
        <Header />
        {routes}
        <div>
         
            {/* <Link> <button path='/wizard'>Add New Property</button></Link> */}
          
        </div>
      </div>
  }
}

export default App;
