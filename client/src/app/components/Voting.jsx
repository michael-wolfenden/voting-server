import React, { PropTypes } from 'react';

const Vote = ({ pair, vote, hasVoted }) => {
    const isDisabled = !!hasVoted;
    const hasVotedFor = entry => hasVoted === entry;

    return (
        <div className="voting">
            {
                pair.map(entry => (
                    <button
                      key={entry}
                      disabled={isDisabled}
                      onClick={() => vote(entry)}
                    >
                        <h1>{entry}</h1>
                        {hasVotedFor(entry) ? <div className="label">Voted</div> : null}
                    </button>
                ))
            }
        </div>
    );
};

Vote.propTypes = {
    pair: PropTypes.arrayOf(PropTypes.string),
    hasVoted: PropTypes.string,
    vote: PropTypes.func,
};

Vote.defaultProps = {
    pair: [],
};

export default Vote;
