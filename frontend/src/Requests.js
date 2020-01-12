import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import { Form, FormInput, FormGroup, FormSelect, Button } from "shards-react";
import { Redirect } from 'react-router-dom';
import axios from "axios";

class Requests extends React.Component {

    state = {
        redirect: false
      }
    
      setRedirect = (event) => {
        const elements = event.target.elements;
        console.log(elements);
        const update = {
            shelterId: "pkf1q1limz",
            shelterName: "Rohan Jayesh Thakker",
            foodQuantity: elements.quantity.value,
            maxDistance : elements.maxDistance.value

        }
        console.log(update);
        axios.post("http://localhost:9000/request/", update).then(function (response) {
          console.log(response);
       
        }).catch(function (error) {
          console.log(error.response);
        })
        this.setState({
            redirect: true
          })
      }
    
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/profile' />
        }
      }

    render() {
        return (
            <div className="registerForm">
            {this.renderRedirect()}
            <Form onSubmit={this.setRedirect}>
                <FormGroup>
                    <label htmlFor="quantity">How much food are you requesting?</label>
                    <FormInput id="quantity"  type="number" placeholder="Quantity" /> kgs
                </FormGroup>
                <FormGroup>
                    <label htmlFor="maxDistance">Maximum Distance Range</label>
                    <FormInput id="maxDistance" type="number" placeholder="Max Distance"/> kms
                </FormGroup>
                <Button size="lg" type="submit">Submit</Button>
            </Form>
        </div>
        )
    }
}

export default Requests;