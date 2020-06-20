/**
 * filters.spec
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

import { uniqueFilterByKey } from './filters';

describe('filters', () => {
    describe('uniqueFilterByKey', () => {
        it('must be defined', () => {
            expect(uniqueFilterByKey).toBeDefined;
        });

        it('must return unique value of an array', () => {
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

            expect(input.filter(uniqueFilterByKey('id')).sort()).toEqual(expected);
        });
    });
});
