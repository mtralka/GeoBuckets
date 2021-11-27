import { geometricProgressionBuckets } from "../../src/classifiers/geometricProgression";
import { DataArrayError, NumberClassError } from "../../src/errors";
import { testDataA, testDataEmptyArray } from "../testData";

test('expect correct classification dataset A', () => {
    const result: Array<number> = geometricProgressionBuckets(testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.GPG
    expect(result).toEqual(answer)
});

test('throw error array negative values in array', () => {
    const data: Array<number> = [42, 55, 35, -1]
    expect( () => {
        geometricProgressionBuckets(data, 2)
    }
        ).toThrowError(DataArrayError)
});

test('throw number class error greater than data length', () => {
    const incorrectNumberClasses: number = testDataA.data.length + 2
    expect( () => {
        geometricProgressionBuckets(testDataA.data, incorrectNumberClasses)
    }
        ).toThrowError(NumberClassError)
});

test('throws number class error greater than zero', () => {
    const incorrectNumberClasses: number = -2
    expect( () => {
        geometricProgressionBuckets(testDataA.data, incorrectNumberClasses)
    }
        ).toThrowError(NumberClassError)
});

test('throws data array error array empty', () => {
    expect( () => {
        geometricProgressionBuckets(testDataEmptyArray.data, testDataEmptyArray.numClasses)
    }
        ).toThrowError(DataArrayError)
});