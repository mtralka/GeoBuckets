import { arithmeticProgressionBuckets } from "../../src/classifiers/arithmeticProgression";
import { DataArrayError, NumberClassError } from "../../src/errors";
import { testDataA, testDataEmptyArray } from "../testData";

test('expect correct classification dataset A', async () => {
    const result: Array<number> = await arithmeticProgressionBuckets(testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.APG
    await expect(result).toEqual(answer)
});

test('throw number class error greater than data length', async () => {
    const incorrectNumberClasses: number = testDataA.data.length + 2
    await expect(
        arithmeticProgressionBuckets(testDataA.data, incorrectNumberClasses)
        ).rejects.toThrowError(NumberClassError)
});

test('throws number class error greater than zero', async () => {
    const incorrectNumberClasses: number = -2
    await expect(
        arithmeticProgressionBuckets(testDataA.data, incorrectNumberClasses)
        ).rejects.toThrowError(NumberClassError)
});

test('throws data array error array empty', async () => {
    await expect(
        arithmeticProgressionBuckets(testDataEmptyArray.data, testDataEmptyArray.numClasses)
        ).rejects.toThrowError(DataArrayError)
});