import { arithmeticProgressionBuckets } from "./classifiers/arithmeticProgression";
import { equalIntervalBuckets } from "./classifiers/equalIntervals";
import { geometricProgressionBuckets } from "./classifiers/geometricProgression";
import { jenksBuckets } from "./classifiers/jenks";
import { quantileBuckets } from "./classifiers/quantile";
import { standardDeviationBuckets } from "./classifiers/standardDeviation";
import { BucketTypes } from "./type";
import { calcMean, calcStandardDeviation } from "./utils";

const generateBuckets = async (name: BucketTypes | string, data: Array<number>, numberClasses: number) : Promise<Array<number>> => {
    
    if (!Object.keys(BucketTypes).includes(name as BucketTypes) && 
        !Object.values(BucketTypes).includes(name as BucketTypes)) {
        throw Error(`${name} not supported`)
    }

    let buckets: Array<number>

    switch (name) {
        case BucketTypes.EQI:
          buckets = await equalIntervalBuckets(data, numberClasses);
          break;
        case BucketTypes.QNT:
          buckets = await quantileBuckets(data, numberClasses);
          break;
        case BucketTypes.STD:
          buckets = await standardDeviationBuckets(data, numberClasses);
          break;
        case BucketTypes.GPG:
          buckets = await geometricProgressionBuckets(data, numberClasses);
          break;
        case BucketTypes.APG:
          buckets = await arithmeticProgressionBuckets(data, numberClasses);
          break;
        case BucketTypes.JNK:
          buckets = await jenksBuckets(data, numberClasses);
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
  generateBuckets,
  BucketTypes
};

