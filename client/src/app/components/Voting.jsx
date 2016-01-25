import React from 'react';

class Vote extends React.Component {
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

Vote.propTypes = {
    pair: React.PropTypes.array,
};

export default Vote;
