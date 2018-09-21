import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Switch>
            <Route path="/" component={Home} exact/>
            {/* <Route path="/products" component={Products} /> */}
            {/* <Route path="/contact" component={Contact} /> */}
            {/* <Route component={Error} /> */}
          </Switch>

          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
