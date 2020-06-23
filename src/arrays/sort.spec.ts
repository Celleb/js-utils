/**
 * sort.spec
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

import { stringSorter, sortStrings, sortByReference } from './sort';

describe('sort', () => {
    describe('stingSorter', () => {
        it('is defined', () => {
            expect(stringSorter).toBeDefined;
        });

        it('sorts strings in alphabetical order', () => {
            expect(['a', 'b', '1', '5'].sort(stringSorter)).toEqual(['1', '5', 'a', 'b']);
        });
    });

    describe('sortStrings', () => {
        it('is defined', () => {
            expect(sortStrings).toBeDefined;
        });

        it('returns an array of alphabetically sorted strings', () => {
            expect(sortStrings(['a', 'b', '1', '5'])).toEqual(['1', '5', 'a', 'b']);
        });
    });

    describe('sortByReference', () => {
        it('must be defined', () => {
            expect(sortByReference).toBeDefined;
        });

        it('sorts an array base on the order of the reference array', () => {
            const input = ['name', 'lastName', 'faceTime', 'taxi'];
            const order = ['faceTime', 'name'];
            const expected = ['faceTime', 'name', 'lastName', 'taxi'];

            expect(sortByReference(input, order)).toEqual(expected);
        });
    });
});
