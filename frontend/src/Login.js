import React from "react";
import { Form, FormInput, FormGroup ,Container, Row, Col, Button} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';

export default function Login() {
  return (
    <Container className="LoginContainer">
    <Row>
    <Col sm={{ size: 8, order: 2, offset: 2 }}>
    <Form>
      <FormGroup>
        <label htmlFor="#username">Username</label>
        <FormInput id="#username" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#password">Password</label>
        <FormInput type="password" id="#password" placeholder="Password" />
      </FormGroup>
    </Form>
    <Button>Log In</Button>
    </Col>
    </Row>
    </Container>
  );
}