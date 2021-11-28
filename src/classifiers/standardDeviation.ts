import { calcMean, calcStandardDeviation, validateDataArray, validateNumberClasses } from "../utils"

export const standardDeviationBuckets = async (data: Array<number>, numberClasses: number, matchDataBounds : boolean = true) : Promise<Array<number>> => {

    validateDataArray(data.length)
    validateNumberClasses(numberClasses, data.length)
    
    const bucketMin: number = Math.min(...data)
    const bucketMax: number = Math.max(...data)

    const standardDeviation: number = await calcStandardDeviation(data)
    const mean: number = await calcMean(data)
    
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