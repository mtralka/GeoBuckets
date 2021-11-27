import { DataArrayError } from "../errors";
import { validateDataArray, validateNumberClasses } from "../utils";

export const geometricProgressionBuckets = async (data: Array<number>, numberClasses: number) : Promise<Array<number>> => {

    validateDataArray(data.length)
    validateNumberClasses(numberClasses, data.length)
    
    if (!data.every((el) => el > 0)) throw new DataArrayError("Array values must be positive for geometric progression")

    const bucketMin: number = Math.min(...data)
    const bucketMax: number = Math.max(...data)

    const logMax: number = Math.log(bucketMax) / Math.LN10
    const logMin: number = Math.log(bucketMin) / Math.LN10

    const interval: number = (logMax - logMin) / numberClasses;

    const initialBuckets: Array<number> = []

    for (let idx = 0; idx < numberClasses; idx++) {

        idx === 0 ? initialBuckets[idx] = logMin : initialBuckets[idx] = initialBuckets[idx - 1] + interval
       
    }

    const buckets: Array<number> = initialBuckets.map((el) => Math.pow(10, el))
    buckets.push(bucketMax)

    return buckets
}