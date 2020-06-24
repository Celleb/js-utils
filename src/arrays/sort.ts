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

export function sortByReference<T extends string | number>(items: T[], ref: T[]): T[] {
    return items.sort((a, b) => indexOf(ref, a) - indexOf(ref, b));
}

/**
 * Returns the index of a value if exists, otherwise returns positive infinity
 * @param items
 * @param value
 */
function indexOf<T extends string | number>(items: T[], value: T): number {
    const i = items.indexOf(value);
    return i < 0 ? Infinity : i;
}
