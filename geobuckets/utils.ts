

// export const validateNumberClasses = (numberClasses: Number) : boolean => {

//     if (!Number.isInteger(numberClasses)) throw "Number classes must be an integer"

//     return true
// }

// export const validateDataArray = (data: Array<Number>) : boolean => {

//     if (data.length <= 0) throw "Array must be bigger than one"

//     return true
// }

export const calcStandardDeviation = (data: Array<number>) : number => {
    const n: number = data.length
    const mean = calcMean(data)
    return Math.sqrt(data.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
  }

export const calcMean = (data: Array<number>) : number => {
    const n: number = data.length
    return data.reduce((a, b) => a + b) / n
}