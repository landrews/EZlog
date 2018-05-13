import React, { Component } from 'react';
import logo from '../../assets/icons/logo.svg';
import './Header.css';

class Header extends Component {

    renderHeader() {
        return (
            <h2>{this.props.title}</h2>
        );
    };

    render() {
        return (
            <div className='header'>
                <img src={logo} className="App-logo" alt="logo" />
                {this.renderHeader()}
            </div>
        )
    }
}

export default Header;

