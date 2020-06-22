/**
 * filters
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

/**
 * Returns a filter that filters a collection by the specified key
 * @param key
 */
export function uniqueByKeyFilter<T>(key: keyof T) {
    return (value: T, index: number, self: T[]): boolean => {
        return self.findIndex((item) => item[key] === value[key]) === index;
    };
}

export function filterByUniqueKey<T>(items: T[], key: keyof T): T[] {
    return items.filter(uniqueByKeyFilter(key));
}
