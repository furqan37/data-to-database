import React, { Component } from 'react';
import Donor from "./Donor";


class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <p> Welcome </p>
        <div>
          <Donor/>
        </div>
      </div>

    );
  }
}

export default Welcome;
