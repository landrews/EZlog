import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EzlogNav.css';

class EzlogNav extends Component {
    render() {
      return (
    
    <div className="EzlogNav">
        
      <nav class="navbar">
        <ul class="navbar-nav text-center">  
          <li class="nav-item">
            <Link class="nav-link" to={'/'}>NYSE</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={'/EzlogNas'}>Nasdaq</Link>
          </li>
        </ul>
      </nav>

    </div>
      );
    }
  }

  export default EzlogNav;