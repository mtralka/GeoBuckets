import { DataArrayError, NumberClassError } from "./errors"

export const validateNumberClasses = (numberClasses: Number, arrayLength: number) : void => {

    if (!Number.isInteger(numberClasses)) throw TypeError("Number classes must be an integer")
    if (numberClasses > arrayLength) throw new NumberClassError("Number classes must be less than array length")
    if (numberClasses <= 0) throw new NumberClassError("Number classes must be greater than zero")
    
}

export const validateDataArray = (arrayLength: number) : void => {

    if (arrayLength <= 0) throw new DataArrayError("Array length must be bigger than one")
}

export const calcStandardDeviation = async (data: Array<number>) : Promise<number> => {
    const n: number = data.length
    const mean = await calcMean(data)
    return Math.sqrt(data.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
  }

export const calcMean = async (data: Array<number>) : Promise<number> => {
    const n: number = data.length
    return data.reduce((a, b) => a + b) / n
}

