import { generateBuckets } from "../src/index";
import { BucketTypes } from "../src/type";
import { testDataA } from "./testData";


test('expect correct JNK dataset A', () => {
    const result: Array<number> = generateBuckets(BucketTypes.JNK,testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.JNK
    expect(result).toEqual(answer)
});

test('expect correct EQI dataset A', () => {
    const result: Array<number> = generateBuckets(BucketTypes.EQI,testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.EQI_A
    expect(result).toEqual(answer)
});

test('expect correct GPG dataset A', () => {
    const result: Array<number> = generateBuckets(BucketTypes.GPG,testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.GPG
    expect(result).toEqual(answer)
});

test('expect correct APG dataset A', () => {
    const result: Array<number> = generateBuckets(BucketTypes.APG,testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.APG
    expect(result).toEqual(answer)
});

test('expect correct QNT dataset A', () => {
    const result: Array<number> = generateBuckets(BucketTypes.QNT,testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.QNT
    expect(result).toEqual(answer)
});

test('expect correct STD dataset A_A', () => {
    // 
    const result: Array<number> = generateBuckets(BucketTypes.STD,testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.STD_A
    expect(result).toEqual(answer)
});

test('expect correct STD dataset A_A from string', () => {
    // 
    const result: Array<number> = generateBuckets("STD",testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.STD_A
    expect(result).toEqual(answer)
});

test('expect correct QNT dataset A', () => {
    const result: Array<number> = generateBuckets("QNT",testDataA.data, testDataA.numClasses)
    const answer: Array<number> = testDataA.answers.QNT
    expect(result).toEqual(answer)
});

test('throw error unsupported name', () => {
    expect( () => {
        generateBuckets("BUCKET",testDataA.data, testDataA.numClasses)
    }
        ).toThrowError('not supported')
});