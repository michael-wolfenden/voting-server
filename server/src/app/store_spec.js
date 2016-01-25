import { expect } from 'chai';
import { fromJS } from 'immutable';
import makeStore from './store';

describe('store', () => {

    it('is a Redux store configured with the correct reducer', () => {
        const store = makeStore();

        expect(store.getState()).to.equal(fromJS({}));

        store.dispatch({
            type: 'SET_ENTRIES',
            entries: ['Trainspotting', '28 Days Later'],
        });

        expect(store.getState()).to.equal(fromJS({
            entries: ['Trainspotting', '28 Days Later'],
        }));
    });

});
