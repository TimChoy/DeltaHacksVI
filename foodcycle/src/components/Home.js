import React, { Component } from 'react';
import BackgroundImg from '../assets/background1.png';
import '../styles/Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    }
  }

  render() {
    return (
    <div class="Home">
      <div className="Text">
        <h1>FoodCycle</h1>
      </div>
    </div>
    );
  }
}

export default Home;