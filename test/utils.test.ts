import { DataArrayError, NumberClassError } from "../src/errors";
import { calcMean, calcStandardDeviation, validateDataArray, validateNumberClasses } from "../src/utils";
import { testDataA, testDataEmptyArray } from "./testData";



test('expect correct STD dataset A', () => {
    const result: number = calcStandardDeviation(testDataA.data)
    const answer: number = 24.903814968795444
    expect(result).toEqual(answer)
});

test('expect correct Mean dataset A', () => {
    const result: number = calcMean(testDataA.data)
    const answer: number = 39
    expect(result).toEqual(answer)
});

test('throws data array error array empty', () => {
    expect( () => {
        validateDataArray(testDataEmptyArray.data.length)
    }
        ).toThrowError(DataArrayError)
});

test('throw number class error greater than data length', () => {
    const incorrectNumberClasses: number = testDataA.data.length + 2
    expect( () => {
        validateNumberClasses(incorrectNumberClasses, testDataA.data.length)
    }
        ).toThrowError(NumberClassError)
});

test('throw number class error must be integer', () => {
    
    expect( () => {
        // @ts-ignore
        validateNumberClasses("3", testDataA.data.length)
    }
        ).toThrowError(TypeError)
});

test('throws number class error greater than zero', () => {
    const incorrectNumberClasses: number = -2
    expect( () => {
        validateNumberClasses(incorrectNumberClasses, testDataA.data.length)
    }
        ).toThrowError(NumberClassError)
});