import React from 'react';
import './Title.css';

class Title extends React.Component {
    render() {
        return (
            <div className="GameLabel">
                <input className="OpponentName" value={this.props.teamName} placeholder="Opposing team name..." onChange={this.props.handleTeamNameChange}/>
                <input className="PlayerName" value={this.props.playerName} placeholder="Player name..." onChange={this.props.handlePlayerNameChange}/>
            </div>
        )
    }
}

export default Title;