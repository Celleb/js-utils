/**
 * clone.spec
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

import { clone } from './clone';

describe('clone', () => {
    it('must be defined', () => {
        expect(clone).toBeDefined;
    });

    it('returns a copy of the input', () => {
        expect(clone({ id: 1 })).toEqual({ id: 1 });
    });

    it('returns an independent copy of the input', () => {
        const obj = { person: { name: 'Jonas' } };
        const obj2 = { ...obj };
        obj2.person.name = 'Tomanga';
        expect(obj).toEqual(obj2);

        const copy = clone(obj);
        expect(copy).toEqual(obj);
        copy.person.name = 'Arandis';
        expect(copy).not.toEqual(obj);
    });
});
