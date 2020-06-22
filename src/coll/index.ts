/**
 * index
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

import * as filters from './filters';
import * as updateColl from './update-coll';

export const coll = { ...filters, ...updateColl };
export default coll;
