import { validateDataArray, validateNumberClasses } from "../utils";

export const jenksBuckets = async (data: Array<number>, numberClasses: number) : Promise<Array<number>> => {

    validateDataArray(data.length)
    validateNumberClasses(numberClasses, data.length)
    
    data.sort((a,b) => a - b)

    const mat1: Array<Array<number>> = Array.from(Array(data.length + 1)).map(el => el = Array(numberClasses + 1))
    const mat2: Array<Array<number>> = Array.from(Array(data.length + 1)).map(el => el = Array(numberClasses + 1))
    
    let v: number = 0.0
    for ( let y = 1, yl = numberClasses + 1; y < yl; y++) {
        mat1[0][y] = 1
        mat2[0][y] = 0
        for ( let t = 1, tl = data.length + 1; t < tl; t++) {
            mat2[t][y] = Infinity
        }
        v = 0.0
    }

    for ( let l = 2, ll = data.length + 1; l < ll; l++) {
        let s1: number = 0.0
        let s2: number = 0.0
        let w : number = 0.0
        for ( let m = 1, ml = l + 1; m < ml; m++) {
            const i3: number = l - m + 1
            const val: number = data[i3 - 1]
            s2 += val * val
            s1 += val
            w += 1
            v = s2 - (s1 * s1) / w
            const i4: number = i3 - 1
            if (i4 != 0) {
                for ( let p = 2, pl = numberClasses + 1; p < pl; p++) {
                    if (mat2[l][p] >= (v + mat2[i4][p - 1])) {
                        mat1[l][p] = i3
                        mat2[l][p] = v + mat2[i4][p - 1]
                    }
                }
            }
        }
        mat1[l][1] = 1
        mat2[l][1] = v
    }

    let k: number = data.length
    const buckets: Array<number> = Array.from(Array(numberClasses + 1)).fill(0)

    buckets[numberClasses] = data[data.length - 1]

    buckets[0] = data[0]
    let countNum: number = numberClasses

    while (countNum >= 2) {
        const id = mat1[k][countNum] - 2
        buckets[countNum - 1] = data[id]
        const idxVal: number = mat1[k][countNum]
        k = idxVal - 1
        countNum -= 1
    }

    if (buckets[0] == buckets[1]) {
        buckets[0] = 0
    }

    return buckets
}