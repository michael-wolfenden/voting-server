import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import Voting from './Voting';

describe('Voting', () => {

    it('renders a pair of buttons', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Voting pair={['Trainspotting', '28 Days Later']} />);

        const actual = renderer.getRenderOutput();

        expect(actual).to.include(<button><h1>Trainspotting < /h1></button >);
        expect(actual).to.include(<button><h1>28 Days Later< /h1></button >);
    });
});
