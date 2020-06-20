/**
 * compare
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

/**
 * Compares to values
 * Uses  JSON.stringify
 */
export function compare(a: any, b: any): boolean {
    return (
        JSON.stringify(a === undefined ? null : a) === JSON.stringify(b === undefined ? null : b)
    );
}
