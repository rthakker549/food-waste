import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import { Redirect } from 'react-router-dom';
import { Form, FormInput, FormGroup, FormSelect, Button } from "shards-react";
import axios from "axios";

class Offers extends React.Component {
    state = {
        redirect: false
      }
    
      setRedirect = (event) => {
        const elements = event.target.elements;
        console.log(elements);
        const update = {
            restaurantId: "k53z3s1wnvs",
            restaurantName: "MaiThai",
            foodQuantity: elements.quantity.value,

        }
        console.log(update);
        axios.post("http://localhost:9000/offer/", update).then(function (response) {
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
          return <Redirect to='/map' />
        }
      }
    render() {
        return (
            <div className="registerForm">
                {this.renderRedirect()}
            <Form onSubmit={this.setRedirect}>
                <FormGroup>
                    <label htmlFor="quantity">How much food are you offering?</label>
                    <FormInput id="quantity"  type="number" placeholder="Quantity" /> kgs
                </FormGroup>
                <Button size="lg" type="submit">Submit</Button>
            </Form>
        </div>
        )
    }
}

export default Offers;