

export const geometricProgressionBuckets = (data: Array<number>, numberClasses: number) : Array<number> => {

    // if (!validateNumberClasses(validateNumberClasses)) return

    // if (!validateDataArray) return 

    // CHECK IF NEGATIVE OR ZERO

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