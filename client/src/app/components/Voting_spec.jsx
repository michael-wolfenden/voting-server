import React from 'react';
import { expect } from 'chai';
import $ from 'teaspoon';

import Voting from './Voting';

describe('Voting', () => {
    it('renders a pair of buttons', () => {
        const $component = $(
            <Voting pair={['Trainspotting', '28 Days Later']} />
        ).render();

        const $buttons = $component.find('button');

        expect($buttons.length).to.equal(2);
        expect($buttons.first().text()).to.equal('Trainspotting');
        expect($buttons.last().text()).to.equal('28 Days Later');
    });

    it('invokes callback when a button is clicked', () => {
        let votedWith;
        const vote = (entry) => votedWith = entry;

        const $component = $(
            <Voting pair={['Trainspotting', '28 Days Later']} vote={vote} />
        ).render();

        $component
            .find('button')
            .first()
            .trigger('click');

        expect(votedWith).to.equal('Trainspotting');
    });
});
