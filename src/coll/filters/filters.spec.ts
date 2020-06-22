/**
 * filters.spec
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

import { uniqueByKeyFilter, filterByUniqueKey } from './filters';

describe('filters', () => {
    describe('uniqueByKeyFilter', () => {
        it('must be defined', () => {
            expect(uniqueByKeyFilter).toBeDefined;
        });

        it('filters for unique items in a collection by the specified key', () => {
            const input = [
                {
                    id: 1,
                },
                {
                    id: 5,
                },
                {
                    id: 1,
                },
            ];

            const expected = [
                {
                    id: 1,
                },
                {
                    id: 5,
                },
            ];

            expect(input.filter(uniqueByKeyFilter('id')).sort()).toEqual(expected);
        });
    });

    describe('filterByUniqueKey', () => {
        it('must be defined', () => {
            expect(filterByUniqueKey).toBeDefined;
        });

        it('Returns a collection of items filtered by unique key', () => {
            const input = [
                {
                    id: 1,
                },
                {
                    id: 5,
                },
                {
                    id: 1,
                },
            ];

            const expected = [
                {
                    id: 1,
                },
                {
                    id: 5,
                },
            ];

            expect(filterByUniqueKey(input, 'id').sort()).toEqual(expected);
        });
    });
});
