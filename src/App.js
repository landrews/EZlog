import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import EzlogNy from './pages/EzlogNy';
import EzlogNas from './pages/EzlogNas';
import Header from './components/header/Header';
import _404 from './pages/_404'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header title="Ezlog" />
         
            <Switch>
                <Route exact path="/" name="NYSE" component={EzlogNy} />
                <Route path="/EzlogNas" name="Nasdaq" component={EzlogNas} />
                <Route component={_404} />
            </Switch>
      </div>
    );
  }
}

export default App;
