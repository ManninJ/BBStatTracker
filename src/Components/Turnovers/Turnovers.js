import React from 'react';
import './Turnovers.css';

class Turnovers extends React.Component {
    render() {
        return (
            <div className="Turnovers">
                <h2>Turnovers</h2>
                <h3>{this.props.totalTurnovers}</h3>
                <div className="buttons">
                    <button className="StealMade" onClick={this.props.incrementTurnovers}>Turnover</button>
                    <button className="Decrement" onClick={this.props.decrementTurnovers}></button>
                </div>
                <hr />
            </div>
        )
    }
}

export default Turnovers;