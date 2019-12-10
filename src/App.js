import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import landing from './components/landing'
import login from './components/login'
import register from './components/register'
import profile from './components/profile'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Router exact path="/" component={landing} />
          <div className="container">
            <Route extact path="/register" component={register} />
            <Route extact path="/login" component={login} />
            <Route extact path="/profile" component={profile} />
          </div>
          
        </div>
      </Router>
    )
  }
}


export default App;
