
export const arithmeticProgressionBuckets = (data: Array<number>, numberClasses: number) : Array<number> => {

    // if (!validateNumberClasses(validateNumberClasses)) return

    // if (!validateDataArray) return 

    const bucketMin: number = Math.min(...data)
    const bucketMax: number = Math.max(...data)

    const interval: number = (bucketMax - bucketMin) / numberClasses;

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
