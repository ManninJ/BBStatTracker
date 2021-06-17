import React from 'react';
import './Steals.css';

class Steals extends React.Component {
    render() {
        return (
            <div className="Steals">
                <h2>Steals</h2>
                <h3>{this.props.totalSteals}</h3>
                <div className="buttons">
                    <button className="StealMade" onClick={this.props.incrementSteals}>Steal</button>
                    <button className="Decrement" onClick={this.props.decrementSteals}></button>
                </div>
                <hr />
            </div>
        )
    }
}

export default Steals;