import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({});

function setEntries(state, entries) {
    return state.set('entries', fromJS(entries));
}

function next(state) {
    const winners = _getWinner(state.get('vote'));

    const entries = state
        .get('entries')
        .concat(winners);

    if (entries.size === 1) {
        return state
            .remove('vote')
            .remove('entries')
            .set('winner', entries.first());
    }

    return state.merge({
        vote: {
            pair: entries.take(2),
        },
        entries: entries.skip(2),
    });
}

function vote(voteState, entry) {
    return voteState.updateIn(
        ['tally', entry],
        0,
        tally => tally + 1);
}

function _getWinner(voteState) {
    if (!voteState) return [];

    const [a, b] = voteState.get('pair');
    const aVotes = voteState.getIn(['tally', a], 0);
    const bVotes = voteState.getIn(['tally', b], 0);

    if (aVotes > bVotes) {
        return [a];
    } else if (aVotes < bVotes) {
        return [b];
    }

    return [a, b];
}

export {
    setEntries,
    next,
    vote,
    INITIAL_STATE };
