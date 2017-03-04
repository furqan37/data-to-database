import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Link to="/Login" className="about">Login </Link>
          <Link to="/signup" className="about">Signup</Link>          
          {/*<Link to="/Welcome" className="about">Welcome</Link>          */}
      
        </div>
                {this.props.children}        

      </div>
    );
  }
}

export default App;
