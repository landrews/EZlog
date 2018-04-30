import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { EzlogNy } from './views';
import { EzlogNas } from './views';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="NYSE" component={EzlogNy} />
          <Route exact path="/EzlogNas" name="Nasdaq" component={EzlogNas} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
