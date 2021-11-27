import { standardDeviationBuckets } from "../../src/classifiers/standardDeviation";
import { DataArrayError, NumberClassError } from "../../src/errors";
import { testDataA, testDataEmptyArray } from "../testData";

test('expect correct classification dataset A DO match bound', () => {
    const result: Array<number> = standardDeviationBuckets(testDataA.data, testDataA.numClasses, true)
    const answer: Array<number> = testDataA.answers.STD_A
    expect(result).toEqual(answer)
});

test('expect correct classification dataset A NOT match bound', () => {
    const result: Array<number> = standardDeviationBuckets(testDataA.data, testDataA.numClasses, false)
    const answer: Array<number> = testDataA.answers.STD_B
    expect(result).toEqual(answer)
});

test('throw number class error greater than data length', () => {
    const incorrectNumberClasses: number = testDataA.data.length + 2
    expect( () => {
        standardDeviationBuckets(testDataA.data, incorrectNumberClasses)
    }
        ).toThrowError(NumberClassError)
});

test('throws number class error greater than zero', () => {
    const incorrectNumberClasses: number = -2
    expect( () => {
        standardDeviationBuckets(testDataA.data, incorrectNumberClasses)
    }
        ).toThrowError(NumberClassError)
});

test('throws data array error array empty', () => {
    expect( () => {
        standardDeviationBuckets(testDataEmptyArray.data, testDataEmptyArray.numClasses)
    }
        ).toThrowError(DataArrayError)
});