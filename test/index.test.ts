import { generateBuckets } from "../src/index";
import { BucketTypes } from "../src/type";
import { testDataA } from "./testData";


test('expect correct JNK dataset A', async () => {
    const result: Array<number> = await generateBuckets(BucketTypes.JNK,testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.JNK
    expect(result).toEqual(answer)
});

test('expect correct EQI dataset A', async () => {
    const result: Array<number> = await generateBuckets(BucketTypes.EQI,testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.EQI_A
    expect(result).toEqual(answer)
});

test('expect correct GPG dataset A', async () => {
    const result: Array<number> = await generateBuckets(BucketTypes.GPG,testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.GPG
    expect(result).toEqual(answer)
});

test('expect correct APG dataset A', async () => {
    const result: Array<number> = await generateBuckets(BucketTypes.APG,testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.APG
    expect(result).toEqual(answer)
});

test('expect correct QNT dataset A', async () => {
    const result: Array<number> = await generateBuckets(BucketTypes.QNT,testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.QNT
    expect(result).toEqual(answer)
});

test('expect correct STD dataset A_A', async () => {
    const result: Array<number> = await generateBuckets(BucketTypes.STD,testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.STD_A
    expect(result).toEqual(answer)
});

test('expect correct STD dataset A_A from string', async () => {
    const result: Array<number> = await generateBuckets("STD",testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.STD_A
    expect(result).toEqual(answer)
});

test('expect correct QNT dataset A', async () => {
    const result: Array<number> = await generateBuckets("QNT",testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.QNT
    expect(result).toEqual(answer)
});

test('throw error unsupported name', async () => {
    await expect(
        generateBuckets("BUCKET",testDataA.data, testDataA.numClasses)
        ).rejects.toThrowError('not supported')
})
