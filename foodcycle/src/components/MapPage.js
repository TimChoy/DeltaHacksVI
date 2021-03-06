import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import '../styles/Map.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import config from 'react-global-configuration';

import Chicken from '../assets/chicken.jpeg';
import Muffin from '../assets/muffin.jpg';
import Banana from '../assets/banana.jpg';
import Burger from '../assets/snooty.jpeg';
import Pizza from '../assets/Boston-Pizza.jpg';
import Wings from '../assets/wings.jpg';  
import Cookie from '../assets/cookie.jpg';  

import GreenIcon from '../assets/Green2.png';

class MapPage extends Component {
  constructor() {
    super();
    this.state = {
      modalFortinos: false,
      modalSnooty: false,
      modalPizza: false,
      locationState: false,
      modalStarbucks: false,
    }
    this.handleOpenFortinos = this.handleOpenFortinos.bind(this);
    this.handleCloseFortinos = this.handleCloseFortinos.bind(this);
    this.handleOpenSnooty = this.handleOpenSnooty.bind(this);
    this.handleCloseSnooty = this.handleCloseSnooty.bind(this);
    this.handleOpenPizza = this.handleOpenPizza.bind(this);
    this.handleClosePizza = this.handleClosePizza.bind(this);
    this.handleOpenStarbucks = this.handleOpenStarbucks.bind(this);
    this.handleCloseStarbucks = this.handleCloseStarbucks.bind(this);
  }

  componentDidMount() {
    const flag = config.get('flag');
    console.log(flag);
    this.setState({
        locationState: flag
    })
  }

  handleOpenFortinos() {
    this.setState({
      modalFortinos: true
    });
  }

  handleCloseFortinos() {
    this.setState({
      modalFortinos: false
    });
  }

  handleOpenSnooty() {
    this.setState({
      modalSnooty: true
    });
  }

  handleCloseSnooty() {
    this.setState({
      modalSnooty: false
    });
  }

  handleOpenPizza() {
    this.setState({
      modalPizza: true
    });
  }

  handleClosePizza() {
    this.setState({
      modalPizza: false
    });
  }

  handleOpenStarbucks() {
    this.setState({
      modalStarbucks: true
    });
  }

  handleCloseStarbucks() {
    this.setState({
      modalStarbucks: false
    });
  }

  render() {
    return (
        <div className="backgroundContainer">
          <div className="mainContainer">
            <Button style={{marginRight: "80%", width: "5px", borderColor: "#00733b", color: "#00733b", backgroundColor: "#ffffff", zIndex: 1}}
            variant="contained"
            component={Link}
            to="/home">
              Home
            </Button>
            <h1 style={{textAlign: "center"}}>FoodCycle Network</h1>
            
            <Map
            google={this.props.google}
            zoom={15}
            initialCenter={{
                lat: 43.2610,
                lng: -79.9225
            }}
            style={{width: "70%", height: "70%", marginLeft: "15%", marginTop: "8%"}}
            >

            <Marker
                title={'Current Location'}
                name={'You are here!'}
                />

            <div className="modal">
                <Modal
                style={{ color: 'White', width: "50%", height: "50%", borderRadius: 20, marginLeft: "25%", marginTop: "2%", borderColor: "black", borderwidth: 1 }}
                open={this.state.modalFortinos}
                onClose={this.handleCloseFortinos}
                >
                <div>
                    <h2>Fortinos (Main St.)</h2>
                    <h4>Hours of Operation:</h4>
                    <p>Saturday	7a.m.–9p.m.</p>
                    <p>Sunday	7a.m.–9p.m.</p>
                    <p>Monday-Friday	7a.m.–9p.m.</p>
                    <h4>Items available:</h4>
                    <Carousel infiniteLoop={true} showThumbs={false}>
                    <div>
                        <img src={Chicken} style={{width: '50%', height: '50%'}}/>
                    </div>
                    <div>
                        <img src={Muffin} style={{width: "50%", height: "50%"}}/>
                    </div>
                    <div>
                        <img src={Banana} style={{width: "50%", height: "50%"}}/>
                    </div>
                    </Carousel>
                </div>
                </Modal>
            </div>

            <div className="modal">
                <Modal
                style={{ color: 'White', width: "50%", height: "50%", borderRadius: 20, marginLeft: "25%", marginTop: "2%", borderColor: "black", borderwidth: 1 }}
                open={this.state.modalSnooty}
                onClose={this.handleCloseSnooty}
                >
                <div>
                    <h2>Snooty Fox</h2>
                    <h4>Hours of Operation:</h4>
                    <p>Saturday	11a.m.–9p.m.</p>
                    <p>Sunday	12p.m.–9p.m.</p>
                    <p>Monday-Friday	11a.m.–12a.m.</p>
                    <h4>Items available:</h4>
                    <Carousel infiniteLoop={true} showThumbs={false}>
                    <div>
                        <img src={Wings} style={{width: '50%', height: '50%'}}/>
                    </div>
                    <div>
                        <img src={Burger} style={{width: "50%", height: "50%"}}/>
                    </div>
                    </Carousel>
                </div>
                </Modal>
            </div>

            <div className="modal">
                <Modal
                style={{ color: 'White', width: "50%", height: "50%", borderRadius: 20, marginLeft: "25%", marginTop: "2%", borderColor: "black", borderwidth: 1 }}
                open={this.state.modalPizza}
                onClose={this.handleClosePizza}
                >
                <div>
                    <h2>Boston Pizza</h2>
                    <h4>Hours of Operation:</h4>
                    <p>Saturday	10a.m.–10p.m.</p>
                    <p>Sunday	10a.m.–10p.m.</p>
                    <p>Monday-Friday	11a.m.–1a.m.</p>
                    <h4>Items available:</h4>
                    <Carousel infiniteLoop={true} showThumbs={false}>
                    <div>
                        <img src={Pizza} style={{width: '50%', height: '50%'}}/>
                    </div>
                    </Carousel>
                </div>
                </Modal>
            </div>

            <div className="modal">
                <Modal
                style={{ color: 'White', width: "50%", height: "50%", borderRadius: 20, marginLeft: "25%", marginTop: "2%", borderColor: "black", borderwidth: 1 }}
                open={this.state.modalStarbucks}
                onClose={this.handleCloseStarbucks}
                >
                <div>
                    <h2>Starbucks</h2>
                    <h4>Hours of Operation:</h4>
                    <p>Saturday	8a.m.–7p.m.</p>
                    <p>Sunday	7a.m.–6p.m.</p>
                    <p>Monday-Friday	7a.m.–8p.m.</p>
                    <h4>Items available:</h4>
                    <Carousel infiniteLoop={true} showThumbs={false}>
                    <div>
                        <img src={Cookie} style={{width: '50%', height: '50%'}}/>
                    </div>
                    </Carousel>
                </div>
                </Modal>
            </div>

            <Marker
                onClick={this.handleOpenFortinos}
                title={'Fortinos (Main St.)'}
                name={'Fortinos (Main St.)'}
                position={{ lat: 43.2553, lng: -79.9289 }}
                onMouseover={this.onMouseoverMarker}
                icon={{
                    url: GreenIcon
                }}
            />

            <Marker
                onClick={this.handleOpenSnooty}
                title={'Snooty Fox'}
                name={'Snooty Fox'}
                position={{ lat: 43.2618, lng: -79.9052 }}
                onMouseover={this.onMouseoverMarker}
                icon={{
                    url: GreenIcon
                }}
            />

            <Marker
                onClick={this.handleOpenPizza}
                title={'Boston Pizza'}
                name={'Boston Pizza'}
                position={{ lat: 43.2572, lng: -79.9277 }}
                onMouseover={this.onMouseoverMarker}
                icon={{
                    url: GreenIcon
                }}
            />

            {this.state.locationState ?
                <Marker
                    onClick={this.handleOpenStarbucks}
                    title={'Starbucks'}
                    name={'Starbucks'}
                    position={{ lat: 43.2576, lng: -79.9194 }}
                    onMouseover={this.onMouseoverMarker}
                    icon={{
                        url: GreenIcon
                    }}
                />
            : 
            <>
            </>
            }

            <InfoWindow onClose={this.onInfoWindowClose}>
                {/* <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    </div> */}
            </InfoWindow>
            </Map>
          </div>
        </div>
    );
  }
}
let key = "INSERT GOOGLE MAPS API KEY HERE";

export default GoogleApiWrapper({
  apiKey: (key)
})(MapPage)