/**
 * update-coll.spec
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

import { updateColl } from './update-coll';
import { compare } from '../utils/compare';

describe('utils:updateColl', () => {
    it('must be defined', () => {
        expect(updateColl).toBeDefined;
    });

    it('must extend the collection', () => {
        const collection = [
            {
                id: 1,
            },
        ];
        const update = [
            {
                id: 4,
            },
        ];
        const expected = [
            {
                id: 1,
            },
            {
                id: 4,
            },
        ];

        expect(compare(updateColl('id', collection, update), expected)).toEqual(true);
    });

    it('must extend updated existing items', () => {
        const collection = [
            {
                id: 1,
                cars: 4,
            },
            {
                id: 4,
                cars: 5,
            },
        ];
        const update = [
            {
                id: 4,
                cars: 8,
            },
            {
                id: 5,
                cars: 0,
            },
        ];
        const expected = [
            {
                id: 1,
                cars: 4,
            },
            {
                id: 4,
                cars: 8,
            },
            {
                id: 5,
                cars: 0,
            },
        ];

        expect(compare(updateColl('id', collection, update), expected)).toEqual(true);
    });
});
