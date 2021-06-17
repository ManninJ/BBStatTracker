import React from 'react';
import './PointsStyles.css';

class Points extends React.Component {
    render() {
        return (
            <div className="Points">
                <h2>Total Points</h2>
                <h3>{this.props.totalPoints}</h3>
                <div className="FieldGoalsMade">
                    <button className="FieldGoalMade" onClick={this.props.madeFieldGoalIsTwo} >2P FG Made</button>
                    <input value={this.props.fieldGoalsMade} disabled="disabled"/>
                    <button className="Decrement" onClick={this.props.decrementFGMadeIsTwo}></button>
                </div>
                <div className="FieldGoalsAttempted">
                    <button className="FieldGoalMissed" onClick={this.props.missedFieldGoalIsTwo}>2P FG Missed</button>
                    <input value={this.props.fieldGoalsAttempted} disabled="disabled"/>
                    <button className="Decrement" onClick={this.props.decrementFGMissedIsTwo}></button>
                </div>
                <div>
                    <h2>{this.props.fieldGoalPercent}%</h2>
                    <h4>Field Goal Percentage</h4>
                </div>
                <hr />
                <div className="ThreePointsMade">
                    <button className="ThreePointMade"
                            onClick={this.props.madeThreeButton}>3P Made</button>
                    <input value={this.props.threePointsMade} disabled="disabled"/>
                    <button className="Decrement" onClick={this.props.decrement3PMade}></button>
                </div>
                <div className="ThreePointsAttempted">
                    <button className="ThreePointMissed"
                            onClick={this.props.missedThreeButton}>3P Missed</button>
                    <input value={this.props.threePointsAttempted} disabled="disabled"/>
                    <button className="Decrement" onClick={this.props.decrement3PMissed}></button>
                </div>
                <div>
                    <h2>{this.props.threePointPercent}%</h2>
                    <h4>Three Point Percentage</h4>
                </div>
                <hr />
                <div className="FreeThrowsMade">
                    <button className="FreeThrowMade"
                            onClick={this.props.madeFreeThrowButton}>FT Made</button>
                    <input value={this.props.freeThrowsMade} disabled="disabled"/>
                    <button className="Decrement" onClick={this.props.decrementFTMade}></button>
                </div>
                <div className="FreeThrowsAttempted">
                    <button className="FreeThrowMissed"
                            onClick={this.props.missedFreeThrowButton}>FT Missed</button>
                    <input value={this.props.freeThrowsAttempted} disabled="disabled"/>
                    <button className="Decrement" onClick={this.props.decrementFTMissed}></button>
                </div>
                <h2>{this.props.freeThrowPercent}%</h2>
                    <h4>Free Throw Percentage</h4>
                <hr />
            </div>
        )
    }
}

export default Points;