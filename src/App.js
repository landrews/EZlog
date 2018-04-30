import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import EzlogNy from './pages/EzlogNy';
import EzlogNas from './pages/EzlogNas';
import Header from './components/header/Header';
import _404 from './pages/_404'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Welcome to our app" />
        <HashRouter>
          <Switch>
            <Route exact path="/" name="NYSE" component={EzlogNy} />
            <Route path="/EzlogNas" name="Nasdaq" component={EzlogNas} />
            <Route component={_404} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
