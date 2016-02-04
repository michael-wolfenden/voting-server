import React, { PropTypes } from 'react';
import Winner from './Winner';
import Vote from './Vote';

const Voting = (props) => {
    const { winner } = props;

    return (
        <div>
            {
                winner ?
                    <Winner winner={winner} /> :
                    <Vote {...props} />
            }
        </div>
    );
};

Voting.propTypes = {
    winner: PropTypes.string,
};

export default Voting;
