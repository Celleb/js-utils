/**
 * sort.spec
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

import { stringSorter, sortStrings } from './sort';

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
});
