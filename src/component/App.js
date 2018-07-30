import React, { Component } from 'react';
import '../style/App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from '../router';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Router/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
