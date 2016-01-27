import React, { PropTypes } from 'react';

const Vote = (props) => (
    <div className="voting">
        {props.pair.map(entry =>
            <button key={entry}>
                <h1>{entry}</h1>
            </button>
        )}
    </div>
);

Vote.propTypes = {
    pair: PropTypes.arrayOf(PropTypes.string),
};

Vote.defaultProps = {
    pair: [],
};

export default Vote;
