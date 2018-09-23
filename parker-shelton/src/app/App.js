import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route component={Error} />
          </Switch>

          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
