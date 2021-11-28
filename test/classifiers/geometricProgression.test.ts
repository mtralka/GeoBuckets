import { geometricProgressionBuckets } from "../../src/classifiers/geometricProgression";
import { DataArrayError, NumberClassError } from "../../src/errors";
import { testDataA, testDataEmptyArray } from "../testData";

test('expect correct classification dataset A', async () => {
    const result: Array<number> = await geometricProgressionBuckets(testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.GPG
    expect(result).toEqual(answer)
});

test('throw error array negative values in array', async () => {
    const data: Array<number> = [42, 55, 35, -1]
    await expect(
        geometricProgressionBuckets(data, 2)
        ).rejects.toThrowError(DataArrayError)
});

test('throw number class error greater than data length', async () => {
    const incorrectNumberClasses: number = testDataA.data.length + 2
    await expect(
        geometricProgressionBuckets(testDataA.data, incorrectNumberClasses)
        ).rejects.toThrowError(NumberClassError)
});

test('throws number class error greater than zero', async () => {
    const incorrectNumberClasses: number = -2
    await expect(
        geometricProgressionBuckets(testDataA.data, incorrectNumberClasses)
        ).rejects.toThrowError(NumberClassError)
});

test('throws data array error array empty', async () => {
    await expect(
        geometricProgressionBuckets(testDataEmptyArray.data, testDataEmptyArray.numClasses)
        ).rejects.toThrowError(DataArrayError)
});