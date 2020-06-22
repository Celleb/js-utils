/**
 * filters
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

/**
 * A filter to return unique values in an array.
 */
export function uniqueFilter<T>(value: T, index: number, self: T[]): boolean {
    return self.indexOf(value) === index;
}

/**
 * Returns an array of unique items
 * @param items
 */
export function filterUnique<T>(items: T[]): T[] {
    return items.filter(uniqueFilter);
}
