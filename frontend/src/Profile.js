import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import axios from "axios";

class Profile extends React.Component {

  


  render () {
    return (
      <div className="Portal">
          <Card className="inventoryCard" style={{ width: "300px",height:"300px" }}>
            <CardBody>
              <CardTitle>Request</CardTitle>
              <br/>
            <CardSubtitle>Date: Jan 12, 2020 || Need: 19 kgs</CardSubtitle>
            </CardBody>
          </Card>
          <br/>
          <Card className="inventoryCard" style={{ width: "300px",height:"300px" }}>
            <CardBody>
              <CardTitle>Request</CardTitle>
              <br/>
            <CardSubtitle>Date: Jan 09, 2020 || Need: 15 kgs</CardSubtitle>
            </CardBody>
          </Card>
      </div>
    );
  }
}

export default Profile;