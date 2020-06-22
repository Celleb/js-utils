/**
 * update-coll
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

/**
 * Adds or update items of a collection based on the specified key
 * @param key
 * @param collection
 * @param updates
 */
export function updateColl<T extends { [key: string]: any } = Record<string, any>>(
    key: keyof T,
    collection: T[],
    updates: T[]
): T[] {
    return collection.filter((item) => !updates.some((a) => item[key] === a[key])).concat(updates);
}
