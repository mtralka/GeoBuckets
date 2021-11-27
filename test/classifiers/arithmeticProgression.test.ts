import { arithmeticProgressionBuckets } from "../../src/classifiers/arithmeticProgression";
import { DataArrayError, NumberClassError } from "../../src/errors";
import { testDataA, testDataEmptyArray } from "../testData";

test('expect correct classification dataset A', () => {
    const result: Array<number> = arithmeticProgressionBuckets(testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.APG
    expect(result).toEqual(answer)
});

test('throw number class error greater than data length', () => {
    const incorrectNumberClasses: number = testDataA.data.length + 2
    expect( () => {
        arithmeticProgressionBuckets(testDataA.data, incorrectNumberClasses)
    }
        ).toThrowError(NumberClassError)
});

test('throws number class error greater than zero', () => {
    const incorrectNumberClasses: number = -2
    expect( () => {
        arithmeticProgressionBuckets(testDataA.data, incorrectNumberClasses)
    }
        ).toThrowError(NumberClassError)
});

test('throws data array error array empty', () => {
    expect( () => {
        arithmeticProgressionBuckets(testDataEmptyArray.data, testDataEmptyArray.numClasses)
    }
        ).toThrowError(DataArrayError)
});