import React, { PropTypes } from 'react';

const Winner = ({ winner }) => {
    return (
        <div className="winner">
            Winner is {winner}!
        </div>
    );
};

Winner.propTypes = {
    winner: PropTypes.string,
};

export default Winner;
