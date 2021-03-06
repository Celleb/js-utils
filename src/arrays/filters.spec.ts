/**
 * filters.spec
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

import { uniqueFilter, filterUnique } from './filters';

describe('filters', () => {
    describe('uniqueFilter', () => {
        it('must be defined', () => {
            expect(uniqueFilter).toBeDefined;
        });

        it('must return unique value of an array', () => {
            expect([1, 2, 4, 5, 5, 5].filter(uniqueFilter).sort()).toEqual([1, 2, 4, 5]);
        });
    });

    describe('filterUnique', () => {
        it('must be defined', () => {
            expect(filterUnique).toBeDefined;
        });

        it('returns an array with unique values', () => {
            expect(filterUnique([1, 2, 4, 5, 5, 5]).sort()).toEqual([1, 2, 4, 5]);
        });
    });
});
