import { calcMean, calcStandardDeviation } from "../utils"

export const standardDeviationBuckets = (data: Array<number>, numberClasses: number, matchDataBounds : boolean = true) : Array<number> => {


    validateNumberClasses(numberClasses, data.length)

    // if (!validateDataArray) return 

    const bucketMin: number = Math.min(...data)
    const bucketMax: number = Math.max(...data)

    const standardDeviation: number = calcStandardDeviation(data)
    const mean: number = calcMean(data)
    
    const buckets: Array<number> = []

    switch (numberClasses % 2) {
        case 0: 
            const meanBound = numberClasses / 2;
            
            buckets[meanBound] = mean;
            
            for (let idx = meanBound - 1; idx > 0; idx--) {
                buckets[idx] = buckets[idx+1] - standardDeviation;
            }
            
            for (let idx = meanBound + 1; idx < numberClasses; idx++) {
                buckets[idx] = buckets[idx-1] + standardDeviation;
            }
            break;
        case 1:

            const infBound = Math.floor(numberClasses / 2); 
            const supBound = infBound + 1;
            
            buckets[infBound] = mean - (standardDeviation / 2);
            buckets[supBound] = mean + (standardDeviation / 2);
            
    
            for (let idx = infBound - 1; idx > 0; idx--) {
                buckets[idx] = buckets[idx+1] - standardDeviation;
            }
            
        
            for (var idx = supBound + 1; idx < numberClasses; idx++) {
                buckets[idx] = buckets[idx-1] + standardDeviation;
            }
            break;
    }

    buckets[0] = matchDataBounds ? buckets[1] - standardDeviation : bucketMin;
    
    buckets[numberClasses] = matchDataBounds ? buckets[numberClasses-1] + standardDeviation : bucketMax;

    return buckets
}