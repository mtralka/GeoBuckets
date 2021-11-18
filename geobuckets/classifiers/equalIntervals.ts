
export const equalIntervalBuckets = (data: Array<number>, numberClasses: number, classMin?: number, classMax?: number) : Array<number> => {

    // if (!validateNumberClasses(validateNumberClasses)) return

    // if (!validateDataArray) return 

    const bucketMin: number = classMin || Math.min(...data)
    const bucketMax: number = classMax || Math.max(...data)

    const interval: number = (bucketMax - bucketMin) / numberClasses

    const buckets: Array<number> = []
    let bucketModifier: number = bucketMin
    for (let idx = 0; idx <= numberClasses; idx++) {
        buckets[idx] = bucketModifier
        bucketModifier += idx
    }

    buckets[numberClasses] = bucketMax

    return buckets
}
