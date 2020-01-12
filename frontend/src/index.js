import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TopNavbar from './components/TopNavbar';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login'
import Metrics from './Metrics'
import Register from './Register'
import ShelterRegister from './ShelterRegister'
import Requests from './Requests'
import Offers from './Offers'
import Maps from "./Maps"
import Profile from "./Profile"
import MatchPage from "./MatchPage"

const router = (
    <Router>
        <div>
            <TopNavbar/>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/metrics" component={Metrics}/>
            <Route path="/register" component={Register}/>
            <Route path="/shelterreg" component={ShelterRegister} />
            <Route path="/requests" component={Requests} />
            <Route path="/offers" component={Offers} />
            <Route path="/map" component={Maps} />
            <Route path="/profile" component={Profile} />
            <Route path="/match" component={MatchPage} />
        </div>
    </Router>
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
