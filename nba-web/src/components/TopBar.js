import React from 'react';
import nba from "../assets/images/nba.svg";

export class TopBar extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={nba} className="App-logo" alt="logo"/>
                </header>
            </div>
        );
    }
}