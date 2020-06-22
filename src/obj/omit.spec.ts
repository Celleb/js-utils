/**
 * omit.spec
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

import { omit, omitExtra } from './omit';

describe('omit', () => {
    it('must be defined', () => {
        expect(omit).toBeDefined;
    });

    it('must omit the specified key', () => {
        const input = {
            one: 1,
            two: 'two',
        };

        const expected = {
            one: 1,
        };

        expect(omit(input, 'two')).toEqual(expected);
    });

    it('must omit the specified keys', () => {
        const input = {
            1: 'one',
            one: 1,
            2: 'two',
            four: 4,
            five: 'five',
            '5': 'five',
            '4': 'four',
        };

        const expected = {
            1: 'one',
            one: 1,
            five: 'five',
            '4': 'four',
        };

        expect(omit(input, 2, 'four', '5')).toEqual(expected);
    });
});

describe('omitExtra', () => {
    it('must be defined', () => {
        expect(omit).toBeDefined;
    });

    it('must omit the specified key', () => {
        const input = {
            one: 1,
            two: 'two',
        };

        const expected = {
            one: 1,
        };

        expect(omitExtra(input, 'two')).toEqual(expected);
    });

    it('must omit the specified keys', () => {
        const input = {
            1: 'one',
            one: 1,
            2: 'two',
            four: 4,
            five: 'five',
            '5': 'five',
            '4': 'four',
        };

        const expected = {
            1: 'one',
            one: 1,
            five: 'five',
            '4': 'four',
        };

        expect(omitExtra(input, 2, 'four', '5')).toEqual(expected);
    });

    it('must omit specified symbol', () => {
        const ATM = Symbol('ATM');
        const ATM2 = Symbol('ATM2');
        const input = {
            one: 'one',
            [ATM]: 'ATM',
            [ATM2]: 'ATM2',
        };

        const expected = {
            one: 'one',
            [ATM2]: 'ATM2',
        };

        expect(omitExtra(input, ATM)).toEqual(expected);
    });
});
