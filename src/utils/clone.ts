/**
 * clone
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

/**
 * Returns a clone of the data
 * Uses JSON.stringify and JSON.parse
 */
export function clone<T>(data: T): T {
    if (data === undefined) {
        return data;
    }
    return JSON.parse(JSON.stringify(data));
}
