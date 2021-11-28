import { equalIntervalBuckets } from "../../src/classifiers/equalIntervals";
import { DataArrayError, NumberClassError } from "../../src/errors";
import { testDataA, testDataEmptyArray } from "../testData";

// TODO test bucket min / max

test('expect correct classification dataset A', async () => {
    const result: Array<number> = await equalIntervalBuckets(testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.EQI_A
    expect(result).toEqual(answer)
});

test('expect correct classification min / max bounds', async () => {
    const result: Array<number> = await equalIntervalBuckets(testDataA.data, testDataA.numClasses, 20, 40)
    const answer: Array<number> = [ 20, 26.666666666666668, 33.333333333333336, 40 ]
    expect(result).toEqual(answer)
});

test('throw number class error greater than data length', async () => {
    const incorrectNumberClasses: number = testDataA.data.length + 2
    await expect(
        equalIntervalBuckets(testDataA.data, incorrectNumberClasses)
        ).rejects.toThrowError(NumberClassError)
});

test('throws number class error greater than zero', async () => {
    const incorrectNumberClasses: number = -2
    await expect(
        equalIntervalBuckets(testDataA.data, incorrectNumberClasses)
        ).rejects.toThrowError(NumberClassError)
});

test('throws data array error array empty', async () => {
    await expect(
        equalIntervalBuckets(testDataEmptyArray.data, testDataEmptyArray.numClasses)
        ).rejects.toThrowError(DataArrayError)
});