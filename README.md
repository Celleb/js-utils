# js-utils

![Build](https://github.com/Celleb/js-utils/workflows/Build/badge.svg) ![Test](https://github.com/Celleb/js-utils/workflows/Test/badge.svg)

Typescript/Javascript utilities for arrays, objects, collections and more.

## Getting started

```bash
npm i @celleb/js-utils --save
```

## Available utils

### arrays

Utils for arrays

Usage:

```javascript
import arrays from '@celleb/js-utils/arrays';
// or
import { arrays } from '@celleb/js-utils';
```

#### uniqueFilter

A filter to return unique values in an array

Example:

```javascript
import { uniqueFilter } from '@celleb/js-utils/arrays';
const cities = ['Windhoek', 'Bloemfontein', 'Windhoek'].filter(uniqueFilter); // ['Windhoek', 'Bloemfontein']
```

#### filterUnique

Returns an array of unique values

Example:

```javascript
import { filterUnique } from '@celleb/js-utils/arrays';
const cities = filterUnique(['Windhoek', 'Bloemfontein', 'Windhoek']); // ['Windhoek', 'Bloemfontein']
```

#### stringSorter

Sort function to sort strings in alphabetical order

```javascript
import { stringSorter } from '@celleb/js-utils/arrays';
['a', 'b', '1', '5'].sort(stringSorter)) // ['1', '5', 'a', 'b'];
```

#### sortStrings

Sort function to sort strings in alphabetical order

```javascript
import { sortStrings } from '@celleb/js-utils/arrays';
sortStrings(['a', 'b', '1', '5']); // ['1', '5', 'a', 'b'];
```

#### sortByReference

Sort an array base on the order of the reference array.

```javascript
import { sortByReference } from '@celleb/js-utils/arrays';
const order = ['faceTime', 'name'];
const input = ['name', 'lastName', 'faceTime', 'taxi'];
sortByReference(input, order)); // ['faceTime', 'name', 'lastName', 'taxi']
```

### coll

Utils for collections.
A collection is an array of objects.

Usage:

```javascript
import coll from '@celleb/js-utils/coll';
// or
import { coll } from '@celleb/js-utils';
```

#### uniqueFilterByKey

Filters for unique items in a collection by the specified key

Example

```javascript
import { uniqueFilterByKey } from '@celleb/js-utils/coll';
const coll = [
 { id: 1, name: 'Jonas' },
 { id: 1, name: 'Tomanga' },
];
coll.filter(uniqueFilterByKey('id')); // [{id: 1, name: 'Jonas'}]
```

#### filterByUniqueKey

Returns a collection of items filtered by unique key

Example

```javascript
import { filterByUniqueKey } from '@celleb/js-utils/coll';
const coll = [
 { id: 1, name: 'Jonas' },
 { id: 1, name: 'Tomanga' },
];
filterByUniqueKey(coll, 'id'); // [{id: 1, name: 'Jonas'}]
```

#### updateColl

Adds or update items of a collection based on the specified key

Example

```javascript
import { updateColl } from '@celleb/js-utils/coll';
const coll = [
 { id: 1, name: 'Jonas' },
 { id: 2, name: 'Tomanga' },
];
updateColl('id', coll, [{ id: '2', name: 'Manga' }]); // [{id: 1, name: 'Jonas'}, {id: 2, name: 'Manga'}]
```

### obj

Utils for objects.

Usage:

```javascript
import obj from '@celleb/js-utils/obj';
// or
import { obj } from '@celleb/js-utils';
```

#### omit

Returns an object with the specified keys omitted

##### Parameters

The first parameter is the object, and the subsequent parameters are the keys to be omitted.
There's an autocomplete for keys in typescript.

Example

```javascript
import { omit } from '@celleb/js-utils/obj';
const data = { 1: 'one', id: 'one', city: 'Opuwo', country: 'Namibia' };
omit(data, 1, 'id'); // {city: 'Opuwo', country: 'Namibia'}
```

#### omitExtra

Same as `omit` but also accounts for symbol keys

Example

```javascript
import { omitExtra } from '@celleb/js-utils/obj';
const ID = Symbol('id');
const data = { [ID]: 'one', id: 'one', city: 'Opuwo', country: 'Namibia' };
omitExtra(data, ID, 'id'); // {city: 'Opuwo', country: 'Namibia'}
```

#### shallowTransform

Transforms the keys of the input object to the values of the given dictionary.

Example

```javascript
import { shallowTransform } from '@celleb/js-utils/obj';
const input = { town: 'Windhoek', state: 'Namibia' };
const dictionary = { town: 'city', state: 'country' };
shallowTransform(input, dictionary); // {city: 'Windhoek', country: 'Namibia'}
```

#### swapKeysAndValues

Swaps keys with values in a shallow dictionary.

Example

```javascript
import { swapKeysAndValues } from '@celleb/js-utils/obj';
const dictionary = { town: 'city', state: 'country' };
swapKeysAndValues(dictionary); // {city: 'town', country: 'state'}
```

#### shallowToDeepTransform

Transforms the input keys to those in a shallow dictionary

Example

```javascript
import { shallowToDeepTransform } from '@celleb/js-utils/obj';
const input = { town: 'Windhoek', state: 'Namibia', cood: { lat: 1, lon: 2 } };
const dictionary = { town: 'city', state: 'country', 'cood.lat': 'point.x', 'cood.lon': 'point.y' };
shallowToDeepTransform(input, dictionary); // {city: 'Windhoek', country: 'Namibia', point: {x: 1, y: 2} }
```

### utils

Additional utils

Usage:

```javascript
import utils from '@celleb/js-utils/utils';
// or
import { utils } from '@celleb/js-utils';
```

#### clone

Creates and returns a copy of the input

Example

```javascript
import { clone } from '@celleb/js-utils/obj';
clone({ id: 3 }); // {id: 3}
```

#### compare

Returns `true` when the `stringify` value of two items are identical.

Example

```javascript
import { compare } from '@celleb/js-utils/obj';
const obj1 = { one: 1 };
const obj2 = { one: 1 };
obj1 === obj2; // false
compare(obj1, obj2); // true
```
