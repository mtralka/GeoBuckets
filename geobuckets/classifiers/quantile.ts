
export const quantileBuckets = (data: Array<number>, numberClasses: number) : Array<number> => {

    // if (!validateNumberClasses(validateNumberClasses)) return

    // if (!validateDataArray) return 

    data.sort((a, b) => a - b)

    const quartiles: Array<number> = []
    const step: number = data.length / numberClasses;
    for (let idx = 1; idx <= numberClasses; idx++) {
        const quartileIdx: number = Math.round(idx * step +0.49)
        quartiles.push(data[quartileIdx-1])
    }

    quartiles.unshift(data[0]);

    return quartiles
}