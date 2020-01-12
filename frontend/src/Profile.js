import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import axios from "axios";
import { el } from 'date-fns/locale';

class Profile extends React.Component {

  state = {
    data: []
  }


  componentDidMount() {
    axios.get("http://localhost:9000/request/getAll")
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

  render () {
    return (
      <div className="Portal">
        {this.state.data.map(element => 
               <Card className="inventoryCard">
               <CardBody>
                 <CardTitle>Request</CardTitle>
                 <br/>
               <CardSubtitle>Date: Jan 12, 2020 || Need: {element.foodQuantity} kgs</CardSubtitle>
               </CardBody>
             </Card>
        )}

      </div>
    );
  }
}

export default Profile;