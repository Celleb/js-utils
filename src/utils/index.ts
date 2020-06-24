/**
 * index
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @copyright (c) 2020 Jonas Tomanga
 * All rights reserved
 * @license MIT
 */

import * as clone from './clone';
import * as compare from './compare';
export * from './clone';
export * from './compare';

export default { ...clone, ...compare };
