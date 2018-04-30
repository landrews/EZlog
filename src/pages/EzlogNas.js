import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class EzlogNas extends Component {
  render() {
    return (
      <div className="EzlogNas">
        <h1>Nasdaq Interface Container</h1>
        <Link to={'/'}>NYSE</Link>
      </div>
    );
  }
}

export default EzlogNas;