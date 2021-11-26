import { validateNumberClasses } from "../utils";


export const arithmeticProgressionBuckets = (data: Array<number>, numberClasses: number) : Array<number> => {

    validateNumberClasses(numberClasses, data.length)

    // if (!validateDataArray) return 

    let denominator: number = 0
    for (let idx = 1; idx <= numberClasses; idx++) {
        denominator += idx;
    }

    const bucketMin: number = Math.min(...data)
    const bucketMax: number = Math.max(...data)

    const interval: number = (bucketMax - bucketMin) / denominator;

    const buckets: Array<number> = []

    for (let idx = 0; idx <= numberClasses; idx++) {
        if (idx === 0) {
            buckets[idx] = bucketMin;
        }
        else if(idx === numberClasses) {
            buckets[idx] = bucketMax;
        }
        else {
            buckets[idx] = buckets[idx-1] + (idx * interval);
        }
    }

    return buckets

}
