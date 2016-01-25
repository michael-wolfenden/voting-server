import React, { Component, PropTypes } from 'react';

class Vote extends Component {
    static propTypes = {
        pair: PropTypes.array,
    };

    getPair() {
        return this.props.pair || [];
    }

    render() {
        return (
            <div className="voting">
                {this.getPair().map(entry =>
                    <button key={entry}>
                        <h1>{entry}</h1>
                    </button>
                )}
            </div>
        );
    }
}

export default Vote;
