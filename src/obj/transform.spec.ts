/**
 * transform.spec
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

import { shallowTransform } from './transform';

describe('shallowTransform', () => {
    it('must be defined', () => {
        expect(shallowTransform).toBeDefined;
    });

    it('returns a transformed object with keys from dictionary values', () => {
        const input = {
            id: 5,
            city: 'Oshakati',
            'spots.items': ['1'],
        };
        const dictionary = { id: 'userId', city: 'state', 'spots.items': 'activities.items' };
        const expected = {
            userId: 5,
            state: 'Oshakati',
            'activities.items': ['1'],
        };
        expect(shallowTransform(input, dictionary)).toEqual(expected);
    });
});
