import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';
import {Checkmark} from 'react-checkmark';


class MatchPage extends React.Component {
    state = {
        date: new Date(),
    }

    render() {
        return (
            <div className="match">
                <Checkmark size='xxLarge'/>
                <h1>Thanks for Matching!</h1>
            </div>
        )
    }
}

export default MatchPage;

