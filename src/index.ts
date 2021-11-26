import { arithmeticProgressionBuckets } from "./classifiers/arithmeticProgression";
import { equalIntervalBuckets } from "./classifiers/equalIntervals";
import { geometricProgressionBuckets } from "./classifiers/geometricProgression";
import { jenksBuckets } from "./classifiers/jenks";
import { quantileBuckets } from "./classifiers/quantile";
import { standardDeviationBuckets } from "./classifiers/standardDeviation";
import { calcMean, calcStandardDeviation } from "./utils";

export {
    arithmeticProgressionBuckets,
    equalIntervalBuckets, geometricProgressionBuckets,
    jenksBuckets, quantileBuckets,
    standardDeviationBuckets, calcStandardDeviation,
    calcMean
};

