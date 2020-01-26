import React, { Component } from 'react';
import '../styles/Home.css';
import icon from '../assets/icon.png';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
      <div className="homeText">
        <img src={icon} width='10%'></img>
        <p style={{fontSize: '56px', fontWeight: 'bold', marginTop: '0em', marginBottom: '0.5em'}}>FoodCycle</p>
        <div className="homeButton">
          <Button variant="outlined" style={{color: '#00733b', width: '11em', fontWeight: 'bold', fontSize: '30px', borderColor: '#00733b', borderWidth: '3px', borderRadius: 100}}
          component={Link} to="/map">
            Find Locations
          </Button>
          <p className="spacing"></p>
          <Button variant="outlined" style={{color: '#00733b', width: '11em', fontWeight: 'bold', fontSize: '30px', borderColor: '#00733b', borderWidth: '3px', borderRadius: 100}}
          component={Link} to="/store">
            I'm a Vendor
          </Button>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;