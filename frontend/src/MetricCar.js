import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';

class MetricCar extends Component {
   

  static get CARD_STYLE() {
    return {
        height: '200px',
        width: '500px',
        paddingTop: '80px',
        textAlign: 'center',
        background: '#007bff',
        color: '#FFF',
        fontSize: '24px',
        borderRadius: '10px',
    };
  }

  render() {
    return (
      <ReactCardCarousel autoplay={ false } >
        
        <div style={  MetricCar.CARD_STYLE }>
        <p><strong>Transactions</strong></p>
          {this.props.transactions}
        </div>
        <div style={ MetricCar.CARD_STYLE }>
        <p><strong>Weight of Food Donated</strong></p>
          {this.props.weight} kgs
        </div>
        <div style={ MetricCar.CARD_STYLE }>
        <p><strong>Number of People Served</strong></p>
          {this.props.people}
        </div>
      </ReactCardCarousel>
    );
  }
}

export default MetricCar;

