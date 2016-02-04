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

    it('disables buttons when user has voted', () => {
        const $component = $(
            <Voting
              pair={['Trainspotting', '28 Days Later']}
              hasVoted="Trainspotting"
            />
        ).render();

        const $buttons = $component.find('button');

        expect($buttons.first().is(':disabled')).to.equal(true);
        expect($buttons.last().is(':disabled')).to.equal(true);
    });

    it('adds label to the voted entry', () => {
        const $component = $(
            <Voting
              pair={['Trainspotting', '28 Days Later']}
              hasVoted="Trainspotting"
            />
        ).render();

        const $label = $component.find('.label');

        expect($label.text()).to.equal('Voted');
    });

    it('renders just the winner when there is one', () => {
        const $component = $(
            <Voting winner="Trainspotting" />
        ).render();

        $component.none('button');

        const $winner = $component.find('.winner');

        expect($winner.text()).to.contain('Trainspotting');
    });
});
