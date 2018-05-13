import React, { Component } from 'react';
import EzlogNav from '../components/nav/EzlogNav';


class EzlogNas extends Component {
  render() {
    return (
      <div className="EzlogNas">
        <EzlogNav></EzlogNav>
        <h1 class="text-center"> Nasdaq </h1>
      </div>
    );
  }
}

export default EzlogNas;