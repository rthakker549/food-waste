import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "shards-react";

function App() {
  return (
      <div className="bgImg">
        <h1 className="heading">Ending Food Waste, One Restaurant at a Time.</h1>
        <div className="buttons">
          <Button size="lg" theme="light" href="/register">Restaurants Start Here</Button>
          <Button size="lg" theme="light" href="shelterreg">Shelters Start Here</Button>
        </div>
      </div>
  );
}

export default App;
