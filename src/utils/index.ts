/**
 * index.ts
 *
 * @author Jonas Tomanga <celleb@logicpp.com.na>
 * @copyright (c) 2020 Logic Plus Information Technologies CC
 * All rights reserved
 */

import * as clone from './clone';
import * as compare from './compare';

export const utils = { ...clone, ...compare };
export default utils;
