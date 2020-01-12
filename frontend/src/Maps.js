import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import { Card, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col } from "shards-react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from "axios";

const mapStyles = {
    width: '100%',
    height: '100%',
  };

class Maps extends React.Component {

    render() {
        return (
            <div>
            <Container>
            <Row>
            <Col>
            <div className="cards">
            <Card>
                <CardBody>
                    <CardTitle>Shelter 1</CardTitle>
                     <CardSubtitle>Distance: 420 km | Need: 69 kg</CardSubtitle>
                     <Button>Match</Button>
                 </CardBody>
            </Card>
            <br/>
            <Card>
                <CardBody>
                    <CardTitle>Shelter 2</CardTitle>
                     <CardSubtitle>Distance: 420 km | Need: 69 kg</CardSubtitle>
                     <Button>Match</Button>
                 </CardBody>
            </Card>
            <br/>
            <Card>
                <CardBody>
                    <CardTitle>Shelter 3</CardTitle>
                     <CardSubtitle>Distance: 420 km | Need: 69 kg</CardSubtitle>
                     <Button>Match</Button>
                 </CardBody>
            </Card>
            <br/>
            <Card>
                <CardBody>
                    <CardTitle>Shelter 3</CardTitle>
                     <CardSubtitle>Distance: 420 km | Need: 69 kg</CardSubtitle>
                     <Button>Match</Button>
                 </CardBody>
            </Card>
            <br/>
            <Card>
                <CardBody>
                    <CardTitle>Shelter 3</CardTitle>
                     <CardSubtitle>Distance: 420 km | Need: 69 kg</CardSubtitle>
                     <Button>Match</Button>
                 </CardBody>
            </Card>
            </div>
            </Col>
            <Col>
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
                >
                <Marker position={{ lat: 48.00, lng: -122.00}}   label={"1"} />
                </Map>
            </Col>
            </Row>
            </Container>
            </div>
     
        )
    }
}

export default 
GoogleApiWrapper({
    apiKey: 'AIzaSyAsOwjMvnngb1TYDM8W0aqxFZYNdkM7tH8'
  }) (Maps);