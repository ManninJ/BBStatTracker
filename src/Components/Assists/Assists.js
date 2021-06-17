import React from 'react';
import './Assists.css';

class Assists extends React.Component {
    render() {
        return (
            <div className="Assists">
                <h2>Assists</h2>
                <h3>{this.props.totalAssists}</h3>
                <div className="buttons">
                    <button className="AssistMade" onClick={this.props.incrementAssists}>Assist</button>
                    <button className="Decrement" onClick={this.props.decrementAssists}></button>
                </div>
                <hr />
            </div>
        )
    }
}

export default Assists;