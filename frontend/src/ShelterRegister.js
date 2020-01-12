import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import { Form, FormInput, FormGroup, FormSelect, Button } from "shards-react";
import axios from "axios";

class ShelterRegister extends React.Component {

    render() {
        return (
            <div className="registerForm">
            <Form>
                <FormGroup>
                    <label htmlFor="#name">Name</label>
                    <FormInput id="#name" placeholder="Name" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="#password">Password</label>
                    <FormInput type="password" id="#password" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="#email">Email</label>
                    <FormInput type="email" id="#email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="#phone">Phone Number</label>
                    <FormInput type="tel" id="#phone" placeholder="Phone Number" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="#address">Address</label>
                    <FormInput id="#address" placeholder="Address" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="#city">City</label>
                    <FormInput id="#city" placeholder="City" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="#state">State/Province</label>
                    <FormSelect id="#state" placeholder="State/Province">
                        <option value="AK">Alaska</option>
                        <option value="AL">Alabama</option>
                        <option value="AR">Arkansas</option>
                        <option value="AZ">Arizona</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DC">District of Columbia</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="IA">Iowa</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MD">Maryland</option>
                        <option value="ME">Maine</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MO">Missouri</option>
                        <option value="MS">Mississippi</option>
                        <option value="MT">Montana</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="NE">Nebraska</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NV">Nevada</option>
                        <option value="NY">New York</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VA">Virginia</option>
                        <option value="VT">Vermont</option>
                        <option value="WA">Washington</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WV">West Virginia</option>
                        <option value="WY">Wyoming</option>
                        <option value="AB">Alberta</option>
                        <option value="BC">British Columbia</option>
                        <option value="MB">Manitoba</option>
                        <option value="NB">New Brunswick</option>
                        <option value="NF">Newfoundland</option>
                        <option value="NT">Northwest Territories</option>
                        <option value="NS">Nova Scotia</option>
                        <option value="NU">Nunavut</option>
                        <option value="ON">Ontario</option>
                        <option value="PE">Prince Edward Island</option>
                        <option value="QC">Quebec</option>
                        <option value="SK">Saskatchewan</option>
                        <option value="YT">Yukon Territory</option>
                    </FormSelect>
                </FormGroup>
                <FormGroup>
                <label htmlFor="#zip">Postal Code</label>
                <FormInput id="#zip" placeholder="Postal Code" />
                </FormGroup>
                <Button size="lg">Submit</Button>
            </Form>
        </div>
        )
    }
}

export default ShelterRegister;