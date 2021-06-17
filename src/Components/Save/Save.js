import React from 'react';
import './Save.css';

class Save extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDateDialog: false
        }

        this.handleSavePopup = this.handleSavePopup.bind(this);
    }

    handleSavePopup() {
        this.setState({ showDateDialog: false });
    }

    render() {
        let showData = (
            <div className="ShowData">
                <div className="ShowData-inner">
                    <div className="PlayerName">
                        <p>Player Name: </p>
                        <h2>{this.props.playerName !== '' ? this.props.playerName : 'Default Player'}</h2>
                    </div>
                    <div className="TeamName">
                        <p>Opponent: </p>
                        <h2>{this.props.teamName !== '' ? this.props.teamName : 'Default Team'}</h2>
                    </div>
                    <div className="Labels">
                        <p>Total Points: </p>
                        <p>Field Goals Made: </p>
                        <p>Field Goals Attempted: </p>
                        <p>Field Goal Percentage: </p>
                        <p>3-Point Shots Made: </p>
                        <p>3-Point Shots Attempted: </p>
                        <p>3-Point Shot Percentage: </p>
                        <p>Free Throws Made: </p>
                        <p>Free Throws Attempted: </p>
                        <p>Free Throw Percentage: </p>
                        <p>Total Rebounds: </p>
                        <p>Offensive Rebounds: </p>
                        <p>Defensive Rebounds: </p>
                        <p>Assists: </p>
                        <p>Steals: </p>
                        <p>Blocks: </p>
                        <p>Turnovers: </p>
                        <p>Personal Fouls: </p>
                    </div>
                    <div className="Values">
                        <p>{this.props.totalPoints}</p>
                        <p>{this.props.fieldGoalsMade}</p>
                        <p>{this.props.fieldGoalsAttempted}</p>
                        <p>{this.props.fieldGoalPercent}%</p>
                        <p>{this.props.threePointsMade}</p>
                        <p>{this.props.threePointsAttempted}</p>
                        <p>{this.props.threePointPercent}%</p>
                        <p>{this.props.freeThrowsMade}</p>
                        <p>{this.props.freeThrowsAttempted}</p>
                        <p>{this.props.freeThrowPercent}%</p>
                        <p>{this.props.totalRebounds}</p>
                        <p>{this.props.offensiveRebounds}</p>
                        <p>{this.props.defensiveRebounds}</p>
                        <p>{this.props.totalAssists}</p>
                        <p>{this.props.totalSteals}</p>
                        <p>{this.props.totalBlocks}</p>
                        <p>{this.props.totalTurnovers}</p>
                        <p>{this.props.totalFouls}</p>
                    </div>
                    <div className="Close">
                        <button className="CloseButton" onClick={this.handleSavePopup}>Close</button>
                    </div>
                </div>
            </div>
        );

        return (
            <div className="Save">
                <button className="SaveButton" onClick={() => this.setState({ showDateDialog: true })}>SAVE</button>
                {this.state.showDateDialog &&
                    showData
                }
            </div>
        )
    }
}

export default Save;