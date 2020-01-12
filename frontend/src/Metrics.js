import React from 'react';
import { Row, Col, Container } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import MetricCar from './MetricCar'
import Calendar from 'react-calendar'
import axios from "axios";

class Metrics extends React.Component {
    state = {
        date: new Date(),
    }

    render() {
        return (
            <div>
                <Container className="LoginContainer">
                    <Row>
                        <Col sm={{ size: 8, order: 2, offset: 2}}>
                            <MetricCar transactions="1" weight="125" people="100" />
                            <Calendar
                                calendarType="US"
                                onChange={this.onChange}
                                value={this.state.date}
                                className="reactCalendar"
                            />
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Metrics;

