import { equalIntervalBuckets } from "../../src/classifiers/equalIntervals";
import { DataArrayError, NumberClassError } from "../../src/errors";
import { testDataA, testDataEmptyArray } from "../testData";

// TODO test bucket min / max

test('expect correct classification dataset A', () => {
    const result: Array<number> = equalIntervalBuckets(testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.EQI_A
    expect(result).toEqual(answer)
});

test('expect correct classification min / max bounds', () => {
    const result: Array<number> = equalIntervalBuckets(testDataA.data, testDataA.numClasses, 20, 40)
    const answer: Array<number> = [ 20, 26.666666666666668, 33.333333333333336, 40 ]
    expect(result).toEqual(answer)
});

test('throw number class error greater than data length', () => {
    const incorrectNumberClasses: number = testDataA.data.length + 2
    expect( () => {
        equalIntervalBuckets(testDataA.data, incorrectNumberClasses)
    }
        ).toThrowError(NumberClassError)
});

test('throws number class error greater than zero', () => {
    const incorrectNumberClasses: number = -2
    expect( () => {
        equalIntervalBuckets(testDataA.data, incorrectNumberClasses)
    }
        ).toThrowError(NumberClassError)
});

test('throws data array error array empty', () => {
    expect( () => {
        equalIntervalBuckets(testDataEmptyArray.data, testDataEmptyArray.numClasses)
    }
        ).toThrowError(DataArrayError)
});