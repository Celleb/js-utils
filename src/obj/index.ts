/**
 * index
 *
 * @author Jonas Tomanga <celleb@logicpp.com.na>
 * @copyright (c) 2020 Logic Plus Information Technologies CC
 * All rights reserved
 */

import * as omit from './omit';
import * as transform from './transform';
export * from './omit';
export * from './transform';

export default { ...omit, ...transform };
