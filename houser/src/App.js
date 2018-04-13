import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Wizard from './components/Wizard/Wizard'
import routes from './routes'
import {HashRouter, Route, Switch, Link} from 'react-router-dom';
class App extends Component {
  render() {
    return <div>
        <Header />
        {/* <Wizard/> */}
        {routes}
      </div>
    
  }
}

export default App;
