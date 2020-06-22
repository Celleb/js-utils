/**
 * compare.spec
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

import { compare } from './compare';

describe('compare', () => {
    it('must be defined', () => {
        expect(compare).toBeDefined;
    });

    it('returns true when 2 values are equal', () => {
        const obj1 = { one: 1 };
        const obj2 = { one: 1 };
        expect(obj1 == obj2).toEqual(false);
        expect(compare(obj1, obj2)).toEqual(true);
    });

    it('returns false when to values are not equal', () => {
        expect(compare(1, '1')).toEqual(false);
    });
});
