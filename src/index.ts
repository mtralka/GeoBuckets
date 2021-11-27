import { arithmeticProgressionBuckets } from "./classifiers/arithmeticProgression";
import { equalIntervalBuckets } from "./classifiers/equalIntervals";
import { geometricProgressionBuckets } from "./classifiers/geometricProgression";
import { jenksBuckets } from "./classifiers/jenks";
import { quantileBuckets } from "./classifiers/quantile";
import { standardDeviationBuckets } from "./classifiers/standardDeviation";
import { BucketTypes } from "./type";
import { calcMean, calcStandardDeviation } from "./utils";

const generateBucket = (name: BucketTypes | string, data: Array<number>, numberClasses: number) : Array<number> => {
    
    if (!Object.keys(BucketTypes).includes(name as BucketTypes) && 
        !Object.values(BucketTypes).includes(name as BucketTypes)) {
        throw Error(`${name} not supported`)
    }

    let buckets: Array<number>

    switch (name) {
        case BucketTypes.EQI:
          buckets = equalIntervalBuckets(data, numberClasses);
          break;
        case BucketTypes.QNT:
          buckets = quantileBuckets(data, numberClasses);
          break;
        case BucketTypes.STD:
          buckets = standardDeviationBuckets(data, numberClasses);
          break;
        case BucketTypes.GPG:
          buckets = geometricProgressionBuckets(data, numberClasses);
          break;
        case BucketTypes.APG:
          buckets = arithmeticProgressionBuckets(data, numberClasses);
          break;
        case BucketTypes.JNK:
          buckets = jenksBuckets(data, numberClasses);
          break;
        default:
          throw Error(`${name} not supported`)
    }

    return buckets
}

export {
  arithmeticProgressionBuckets,
  equalIntervalBuckets, geometricProgressionBuckets,
  jenksBuckets, quantileBuckets,
  standardDeviationBuckets, calcStandardDeviation,
  calcMean,
  generateBucket,
  BucketTypes
};

