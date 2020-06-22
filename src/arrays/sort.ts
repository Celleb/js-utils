/**
 * sort
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

/**
 * String alphabetical order comparator
 * @param a
 * @param b
 */
export function stringSorter(a: string, b: string): number {
    return a.localeCompare(b);
}

/**
 * Returns an array of alphabetically sorted strings
 * @param items
 */
export function sortStrings<T extends string>(items: T[]): T[] {
    return items.sort(stringSorter);
}
