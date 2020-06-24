/**
 * index
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

import * as filters from './filters';
import * as sort from './sort';
export * from './filters';
export * from './sort';
export default { ...filters, ...sort };
