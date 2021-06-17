import React from 'react';
import './Rebounds.css';

class Rebounds extends React.Component {
    render() {
        return (
            <div className="Rebounds">
                <h2>Total Rebounds</h2>
                <h3>{this.props.totalRebounds}</h3>
                <div className="OffensiveRebounds">
                    <button className="OffensiveReboundMade" onClick={this.props.incrementOffensiveRebounds}>Offensive</button>
                    <input value={this.props.offensiveRebounds} disabled="disabled"/>
                    <button className="Decrement" onClick={this.props.decrementOffensiveRebounds}></button>
                </div>
                <div className="DefensiveRebounds">
                    <button className="DefensiveReboundMade" onClick={this.props.incrementDefensiveRebounds}>Defensive</button>
                    <input value={this.props.defensiveRebounds} disabled="disabled"/>
                    <button className="Decrement" onClick={this.props.decrementDefensiveRebounds}></button>
                </div>
                <hr />
            </div>
        )
    }
}

export default Rebounds;