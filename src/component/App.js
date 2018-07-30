import React, { Component } from 'react';
import '../style/App.css';
import Review from './review/Review'
import ReviewCreate from './review/ReviewCreate'

class App extends Component {
  render() {
    return (
      <div className="container">
        <ReviewCreate/>
        <div className="row"> 
          <div className="col-md-6 review">
            <Review/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
