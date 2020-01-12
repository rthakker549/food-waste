import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import { Form, FormInput, FormGroup, FormSelect, Button } from "shards-react";
import axios from "axios";

class Requests extends React.Component {


    render() {
        return (
            <div className="registerForm">
            <Form>
                <FormGroup>
                    <label htmlFor="quantity">How much food are you requesting?</label>
                    <FormInput id="quantity"  type="number" placeholder="Quantity" /> kgs
                </FormGroup>
                <FormGroup>
                    <label htmlFor="maxDistance">Maximum Distance Range</label>
                    <FormInput id="maxDistance" type="number" placeholder="Max Distance"/> kms
                </FormGroup>
                <Button size="lg">Submit</Button>
            </Form>
        </div>
        )
    }
}

export default Requests;