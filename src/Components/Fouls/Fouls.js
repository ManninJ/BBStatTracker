import React from 'react';
import './Fouls.css';

class Fouls extends React.Component {
    render() {
        return (
            <div className="Fouls">
                <h2>Personal Fouls</h2>
                <h3>{this.props.totalFouls}</h3>
                <div className="buttons">
                    <button className="StealMade" onClick={this.props.incrementFouls}>Foul</button>
                    <button className="Decrement" onClick={this.props.decrementFouls}></button>
                </div>
                <hr />
            </div>
        )
    }
}

export default Fouls;