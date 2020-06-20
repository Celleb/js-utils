/**
 * omit
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

export function omit<T, K extends [...(keyof T)[]]>(
    obj: T,
    ...keys: K
): { [P in Exclude<keyof T, K[number]>]: T[P] } {
    return (Object.getOwnPropertySymbols(obj) as Array<keyof T>)
        .concat(Object.keys(obj).map((key) => convertToNumbers(keys, key)) as Array<keyof T>)
        .filter((key) => !keys.includes(key))
        .reduce((agg, key) => ({ ...agg, [key]: obj[key] }), {}) as {
        [P in Exclude<keyof T, K[number]>]: T[P];
    };
}

function convertToNumbers(
    keys: Array<string | number | symbol>,
    value: string | number
): number | string {
    if (!isNaN(Number(value)) && keys.some((v) => v === Number(value))) {
        return Number(value);
    }

    return value;
}
