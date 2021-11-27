# 🌎🪣 GeoBuckets

Lightweight Javascript (TypeScript, really) library for classification. Dependency free, tested, and type safe.

## Features

- :fire: supports **6** classification types
- ⚖️: Small!
  - :rocket: **4.4kb** minifed, **1.7kb** gzipped
  - 0️⃣ zero dependencies
  - 🌲 tree-shakeable
- :test_tube: fully tested
- :label: fully typed

## Supports

- Equal Intervals (EQI)
  - `equalIntervalBuckets`
- Standard Deviation (STD)
  - `standardDeviationBuckets`
- Arithmetic Progression (APG)
  - `arithmeticProgressionBuckets`
- Geometric Progression (GPG)
  - `geometricProgressionBuckets`
- Quantiles (QNT)
  - `quantileBuckets`
- Jenks (JNK)
  - `jenksBuckets`

## Usage

Explicit import:

```javascript
import { jenksBuckets } from "geobuckets";

const data: Array<number> = [60, 26, 20, 17, 10, 27, 98, 42, 55, 35];
const numClasses: number = 3;

const buckets: Array<number> = jenksBuckets(data, numClasses);

console.log(buckets) >> [10, 35, 60, 98];
```

Helper function and type

```javascript
import { generateBuckets, BucketTypes } from "geobuckets";

const data: Array<number> = [60, 26, 20, 17, 10, 27, 98, 42, 55, 35];
const numClasses: number = 3;

const buckets: Array<number> = generateBuckets(
  BucketTypes.JNK,
  data,
  numClasses
);

console.log(buckets) >> [10, 35, 60, 98];
```

_A modern implementation of the [GeoStats]("https://github.com/simogeo/geostats") library by Simon Georget (MIT license)_
