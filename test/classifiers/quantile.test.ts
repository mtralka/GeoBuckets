import { quantileBuckets } from "../../src/classifiers/quantile";
import { DataArrayError, NumberClassError } from "../../src/errors";
import { testDataA, testDataEmptyArray } from "../testData";

test('expect correct classification dataset A', async () => {
    const result: Array<number> = await quantileBuckets(testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.QNT
    expect(result).toEqual(answer)
});

test('throw number class error greater than data length', async () => {
    const incorrectNumberClasses: number = testDataA.data.length + 2
    await expect(
        quantileBuckets(testDataA.data, incorrectNumberClasses)
        ).rejects.toThrowError(NumberClassError)
});

test('throws number class error greater than zero', async () => {
    const incorrectNumberClasses: number = -2
    await expect(
        quantileBuckets(testDataA.data, incorrectNumberClasses)
        ).rejects.toThrowError(NumberClassError)
});

test('throws data array error array empty', async () => {
    await expect(
        quantileBuckets(testDataEmptyArray.data, testDataEmptyArray.numClasses)
        ).rejects.toThrowError(DataArrayError)
});