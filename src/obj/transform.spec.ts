/**
 * transform.spec
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

import { shallowTransform, swapKeysAndValues, shallowToDeepTransform } from './transform';

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

describe('shallowToDeepTransform', () => {
    it('must be defined', () => {
        expect(shallowToDeepTransform).toBeDefined;
    });

    it('returns a deep transformed object from a shallow dictionary', () => {
        const input = {
            id: 5,
            city: 'Oshakati',
            spots: {
                it: 1,
                is: 2,
            },
        };
        const dictionary = {
            id: 'userId',
            city: 'state',
            'spots.it': 'activities.items',
            'spots.is': 'activities.me',
        };
        const expected = {
            userId: 5,
            state: 'Oshakati',
            activities: {
                items: 1,
                me: 2,
            },
        };
        const results = shallowToDeepTransform(input, dictionary);
        expect(results).toEqual(expected);
    });

    it('returns a deep transformed object from a shallow dictionary', () => {
        const input = {
            id: 5,
            city: 'Oshakati',
            spots: [
                {
                    it: 1,
                    is: 2,
                },
                {
                    it: 4,
                    is: 4,
                },
            ],
        };
        const dictionary = {
            id: 'userId',
            city: 'state',
            'spots.it': 'activities.items',
            'spots.is': 'activities.me',
        };
        const expected = {
            userId: 5,
            state: 'Oshakati',
            activities: [
                {
                    items: 1,
                    me: 2,
                },
                {
                    items: 4,
                    me: 4,
                },
            ],
        };
        const results = shallowToDeepTransform(input, dictionary);
        expect(results).toEqual(expected);
    });
});

describe('swapKeysAndValues', () => {
    it('must be defined', () => {
        expect(swapKeysAndValues).toBeDefined;
    });

    it('swaps the keys and values of the given object', () => {
        const input = {
            name: 'firstName',
            surname: 'lastName',
        };

        const expected = {
            firstName: 'name',
            lastName: 'surname',
        };

        expect(swapKeysAndValues(input)).toEqual(expected);
    });
});
