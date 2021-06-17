import React from 'react';
import './Blocks.css';

class Blocks extends React.Component {
    render() {
        return (
            <div className="Blocks">
                <h2>Blocks</h2>
                <h3>{this.props.totalBlocks}</h3>
                <div className="buttons">
                    <button className="BlockMade" onClick={this.props.incrementBlocks}>Block</button>
                    <button className="Decrement" onClick={this.props.decrementBlocks}></button>
                </div>
                <hr />
            </div>
        )
    }
}

export default Blocks;