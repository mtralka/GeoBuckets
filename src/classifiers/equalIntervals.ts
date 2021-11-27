import { validateDataArray, validateNumberClasses } from "../utils";

export const equalIntervalBuckets = async (data: Array<number>, numberClasses: number, classMin?: number, classMax?: number) : Promise<Array<number>> => {

    validateDataArray(data.length)
    validateNumberClasses(numberClasses, data.length)
    
    const bucketMin: number = classMin || Math.min(...data)
    const bucketMax: number = classMax || Math.max(...data)

    const buckets: Array<number> = []

    const interval: number = (bucketMax - bucketMin) / numberClasses
    let bucketModifier: number = bucketMin
    for (let idx = 0; idx <= numberClasses; idx++) {
        buckets[idx] = bucketModifier
        bucketModifier += interval
    }

    buckets[numberClasses] = bucketMax

    return buckets
}
