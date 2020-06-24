/**
 * transform
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

/**
 * Transforms the keys of the input object to the values of the given dictionary.
 * @param input
 * @param dictionary
 */
export function shallowTransform<I extends Record<string, any>, D extends Record<keyof I, string>>(
    input: I,
    dictionary: D
): { [P in D[keyof I]]: I[P] } {
    return Object.keys(input)
        .map((key) => [dictionary[key] || key, key])
        .reduce((agg, [key, org]) => ({ ...agg, [key]: input[org] }), {}) as {
        [P in D[keyof I]]: I[P];
    };
}
