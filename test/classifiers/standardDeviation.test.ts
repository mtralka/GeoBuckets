import { standardDeviationBuckets } from "../../src/classifiers/standardDeviation";
import { DataArrayError, NumberClassError } from "../../src/errors";
import { testDataA, testDataEmptyArray } from "../testData";

test('expect correct classification dataset A DO match bound', async () => {
    const result: Array<number> = await standardDeviationBuckets(testDataA.data, testDataA.numClasses, true)
    const answer: Array<number> = testDataA.answers.STD_A
    expect(result).toEqual(answer)
});

test('expect correct classification dataset A NOT match bound', async () => {
    const result: Array<number> = await standardDeviationBuckets(testDataA.data, testDataA.numClasses, false)
    const answer: Array<number> = testDataA.answers.STD_B
    expect(result).toEqual(answer)
});

test('throw number class error greater than data length', async () => {
    const incorrectNumberClasses: number = testDataA.data.length + 2
    await expect(
        standardDeviationBuckets(testDataA.data, incorrectNumberClasses)
        ).rejects.toThrowError(NumberClassError)
});

test('throws number class error greater than zero', async () => {
    const incorrectNumberClasses: number = -2
    await expect(
        standardDeviationBuckets(testDataA.data, incorrectNumberClasses)
        ).rejects.toThrowError(NumberClassError)
});

test('throws data array error array empty', async () => {
    await expect(
        standardDeviationBuckets(testDataEmptyArray.data, testDataEmptyArray.numClasses)
        ).rejects.toThrowError(DataArrayError)
});