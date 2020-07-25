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

export function swapKeysAndValues<O extends Record<string, string>>(
    obj: O
): { [P in O[keyof O]]: string } {
    return Object.entries(obj)
        .map(([key, value]) => [value, key])
        .reduce((agg, [key, value]) => ({ ...agg, [key]: value }), {}) as {
        [P in O[keyof O]]: string;
    };
}

export function shallowToDeepTransform<
    I extends Record<string, any>,
    D extends Record<string, string>
>(input: I, dictionary: D): Record<string, any> {
    const obj: Record<string, any> = {};
    for (const key in dictionary) {
        if (input[key]) {
            obj[dictionary[key]] = input[key];
            continue;
        }

        if (key.indexOf('.') !== -1) {
            const [p, c] = key.split(/\.(.+)/);
            if (input[p] instanceof Object) {
                const [parent, child] = dictionary[key].split(/\.(.+)/);
                if (Array.isArray(input[p])) {
                    obj[parent] = input[p].map((item: Record<string, any>, i: number) =>
                        Object.assign(
                            {},
                            obj[parent] ? obj[parent][i] : {},
                            shallowToDeepTransform(item, { [c]: child })
                        )
                    );
                } else {
                    obj[parent] = Object.assign(
                        {},
                        obj[parent] || {},
                        shallowToDeepTransform(input[p], { [c]: child })
                    );
                }
            }
        }
    }

    return obj;
}
