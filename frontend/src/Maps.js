import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import { Card, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col} from "shards-react";
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
                    <CardTitle>Yukon Shelter</CardTitle>
                     <CardSubtitle>Distance: 2.5 km | Need: 30 kg</CardSubtitle>
                     <Button href="/match">Match</Button>
                 </CardBody>
            </Card>
            <br/>
            <Card>
                <CardBody>
                    <CardTitle>Catholic Charities</CardTitle>
                     <CardSubtitle>Distance: 1.2 km | Need: 8 kg</CardSubtitle>
                     <Button>Match</Button>
                 </CardBody>
            </Card>
            <br/>
            <Card>
                <CardBody>
                    <CardTitle>Salvation Army Belkin House</CardTitle>
                     <CardSubtitle>Distance: 1.5 km | Need: 12 kg</CardSubtitle>
                     <Button>Match</Button>
                 </CardBody>
            </Card>
            <br/>
            <Card>
                <CardBody>
                    <CardTitle>Al Mitchell Place</CardTitle>
                     <CardSubtitle>Distance: 24 km | Need: 14 kg</CardSubtitle>
                     <Button>Match</Button>
                 </CardBody>
            </Card>
            <br/>
            <Card>
                <CardBody>
                    <CardTitle>Triage Shelter</CardTitle>
                     <CardSubtitle>Distance: 31 km | Need: 45 kg</CardSubtitle>
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
                initialCenter={{ lat: 49.282, lng: -123.121}}
                >
                <Marker position={{ lat: 49.271890, lng: -123.112370}}   label={"1"} />
                <Marker position={{ lat: 49.45890, lng: -123.345}}   label={"2"} />
                <Marker position={{ lat: 49.716890, lng: -123.234}}   label={"3"} />
                <Marker position={{ lat: 49.345890, lng: -123.23432}}   label={"4"} />
                <Marker position={{ lat: 49.154, lng: -123.1234}}   label={"5"} />
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