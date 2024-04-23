const print = p => console.log(p);

/**
 * 算階層
 * @param {number} x 
 * @returns number
 */
const starMul = (x) => {
    let ans = 1;
    if (x < 0) return ans;
    for (let i = 1; i <= x; ++i) {
        ans *= i
    }
    return toFix(ans)
}

const round10 = (num, x) => {
    return Math.round(num * (10 ** -x)) / (10 ** -x)
}

const toFix = num=> parseFloat(num.toFixed(10))
/**
 * math_C 用於 up 取 down
 * @param {number} up 
 * @param {number} down 
 * @returns number: up 取 down 的結果
 */
const math_C = (up, down) => toFix(starMul(up) / (starMul(down) * starMul(up- down)))

/**
 * one-1題目給一個array算出下面指標
 * @param {number} arr 
 * @returns [number:平均,
 *          number:M中位數,
 *          number:S平方,
 *          number:S,
 *          array: 排序完後的資料
 * ]
 */
const one_1 = (...arr) => {
    arr.sort((a, b)=> a-b)
    // console.log(arr)

    let nuSum = toFix(arr.reduce((x, y) => x + y))
    let nu =  toFix(nuSum / arr.length)
    // print(nu)

    let med = toFix((arr.length % 2 === 0) ?
                (arr[arr.length / 2  - 1] + arr[arr.length / 2]) / 2 :
                arr[Math.floor(arr.length / 2)])
    // if (arr.length % 2 === 0) {
    //     med = (arr[arr.length / 2  - 1] + arr[arr.length / 2]) / 2
    // } else {
    //     med = arr[Math.floor(arr.length / 2)]
    //     // console.log(med);
    // }

    let s2Sum = 0;
    arr.forEach(x => {
        s2Sum += toFix(x ** 2);
    })
    let s2 = toFix((s2Sum - ((nuSum ** 2) / arr.length)) / (arr.length - 1))
    // print(s2)
    let s = toFix(Math.sqrt(s2))
    // print(s)
    return [nu, med, s2 ,s, arr]
};

/**
 * one-2題目給一個array算出下面指標 need test
 * 
 * @param {number} arr 
 * @returns [number:平均,
 *          number:upper forth,
 *          number:lower forth,
 *          number:forth spread,
 *          array: 排序完後的資料
 * ]
 */
const one_2 = (...arr) => {
    arr.sort((a, b) => a - b);

    // let med = 0
    // if ((arr.length % 2 === 0)) {
    //     med = toFix(arr[arr.length / 2  - 1] + arr[arr.length / 2]) / 2 
    // } else {
    //     med = toFix(arr[Math.floor(arr.length / 2)])
    // }
    
    let med = toFix((arr.length % 2 === 0) ? 
                (arr[arr.length / 2  - 1] + arr[arr.length / 2]) / 2 :
                arr[Math.floor(arr.length / 2)])
    // print(med)

    let lowerArr = arr.slice(0, Math.round(arr.length / 2))
    let upperArr = arr.slice(Math.floor(arr.length / 2), arr.length)

    // print(lowerArr)
    // print(upperArr)

    // let upperForth = 0
    // if ((upperArr.length % 2 === 0)) {
    //     upperForth = toFix(upperArr[Math.floor(upperArr.length / 2) - 1] + upperArr[Math.floor(upperArr.length / 2)]) / 2
    // } else {
    //     upperForth = toFix(upperArr[Math.floor(upperArr.length / 2)])
    // }
    let upperForth = toFix((upperArr.length % 2 === 0) ?
                    (upperArr[Math.floor(upperArr.length / 2) - 1] + upperArr[Math.floor(upperArr.length / 2)]) / 2 :
                    upperArr[Math.floor(upperArr.length / 2)])
    // print(upperForth)

    // let lowerForth = 0
    // if ((lowerArr.length % 2 === 0)) {
    //     lowerForth = toFix(lowerArr[Math.floor(lowerArr.length / 2) - 1] + lowerArr[Math.floor(lowerArr.length / 2)]) / 2 
    // } else {
    //     lowerForth = toFix(lowerArr[Math.floor(lowerArr.length / 2)])
    // }
    let lowerForth = toFix((lowerArr.length % 2 === 0) ?
                    (lowerArr[Math.floor(lowerArr.length / 2) - 1] + lowerArr[Math.floor(lowerArr.length / 2)]) / 2 :
                    lowerArr[Math.floor(lowerArr.length / 2)])
    // print(lowerForth)

    let forthSpread = toFix(upperForth - lowerForth)

    // print(forthSpread)

    return [med, upperForth, lowerForth, forthSpread, arr]
}

/**
 * two-1 題目給a, b, aAndB 算出下面指標
 * @parms {number: P(A), number:P(B), number: P(A and B)} arr
 * @returns [
 *          number: A和B,
 *          number: A沒有B,
 *          number: B沒有A,
 *          number: AB以外,
 *          number: P(A and B),
 *          number: P(notA or notB),
 *          number: P(只有其中一個)
 * ]
 */
const two_1 = (...arr) => {
    let aAndB = arr[2]
    let aNotB = toFix(arr[0] - arr[2])
    let bNotA = toFix(arr[1] - arr[2])
    let outside = toFix(1.0 - aAndB - aNotB - bNotA)

    let P_a_and_B = toFix(aAndB + aNotB + bNotA)
    let P_notA_or_notB = outside
    let P_notA_and_b = bNotA
    let P_a_and_notB = aNotB
    let P_exactly_one = toFix(P_notA_and_b + P_a_and_notB)
    return[aAndB, aNotB, bNotA, outside, P_a_and_B, P_notA_or_notB, P_exactly_one]
}

/**
 * two-2 題目給a, b, aAndB 算出下面指標
 * @parms { number: P(A1),
 *          number: P(A2),
 *          number: P(A3),
 *          number: P(A1 and A2),
 *          number: P(A1 and A3),
 *          number: P(A2 and A3),
 *          number: P(A1 and A2 and A3)
 * } arr
 * @returns [
 *          number: P(A1 or A2),
 *          number: P(notA1 and notA2),
 *          number: P(A1 or A2 or A3),
 *          number: P(notA1 and notA2 and notA3)(outside),
 *          number: P(notA1 and notA2 and A3),
 *          number: P((notA1 and notA2) or A3)
 * ]
 */
const two_2 = (...arr) => {
    let P_a1_and_a2_and_a3 = arr[6]

    let P_a1_and_a2 = toFix(arr[3] - P_a1_and_a2_and_a3)
    let P_a1_and_a3 = toFix(arr[4] - P_a1_and_a2_and_a3)
    let P_a2_and_a3 = toFix(arr[5] - P_a1_and_a2_and_a3)

    let P_a1 = toFix(arr[0] - P_a1_and_a2_and_a3 - P_a1_and_a2 - P_a1_and_a3)
    let P_a2 = toFix(arr[1] - P_a1_and_a2_and_a3 - P_a1_and_a2 - P_a2_and_a3)
    let P_a3 = toFix(arr[2] - P_a1_and_a2_and_a3 - P_a1_and_a3 - P_a2_and_a3)

    let outside = toFix(1 - P_a1 - P_a2 - P_a3 
                        - P_a1_and_a2 - P_a2_and_a3 - P_a1_and_a3
                        - P_a1_and_a2_and_a3)

    // 1
    let P_a1_or_a2 = toFix(P_a1 + P_a2
                            + P_a1_and_a2 + P_a2_and_a3 + P_a1_and_a3 
                            + P_a1_and_a2_and_a3)
    // 2
    let P_notA1_and_notA2 = toFix(P_a3 + outside)
    // 3
    let P_a1_or_a2_or_a3 = toFix(1 - outside)
    // 4
    let P_notA1_and_notA2_and_notA3 = toFix(outside)
    // 5
    let P_notA1_and_notA2_and_a3 = toFix(P_a3);
    // 6
    let P__notA1_and_notA2__or_a3 = toFix(outside + P_a3 + P_a1_and_a3 
                                            + P_a2_and_a3 + P_a1_and_a2_and_a3)
    return [P_a1_or_a2, P_notA1_and_notA2, 
            P_a1_or_a2_or_a3, P_notA1_and_notA2_and_notA3,
            P_notA1_and_notA2_and_a3, P__notA1_and_notA2__or_a3
    ]
    
}

/**
 * @parms  {number: 全部數量, 
 *          number: 雷射數量
 *          number: 墨水數量
 *          number: 隨機取樣數量
 *          number: 剛好為X台的數量
 *          number: 至少為X台的數量
 * } arr
 * @returns [number: 墨水剛好機率, 
 *          number: 雷射剛好數量
 *          number: 墨水至少數量
 *          number: 雷射至少數量
 * ]
 */
const three_1 = (...arr) => {
    let allCount = arr[0]
    let laserCount = arr[1]
    let inkCount = arr[2]
    let randomCount = arr[3]
    let exactlyCount = arr[4]
    let leastCount = arr[5]

    let P_exactly_ink = toFix(math_C(laserCount, randomCount - exactlyCount) *
                                math_C(inkCount, exactlyCount) / 
                                math_C(allCount, randomCount))

    let P_exactly_laser = toFix(math_C(laserCount, exactlyCount) *
                            math_C(inkCount, randomCount - exactlyCount) / 
                            math_C(allCount, randomCount))
    // print(P_exactly)
    let P_least_ink = () => {
        let sum = 0
        for(let i = randomCount; i >= leastCount; --i) {
            sum += math_C(laserCount, randomCount - i) *
                    math_C(inkCount, i) / 
                    math_C(allCount, randomCount)
        }
        return toFix(sum)
    }
    let P_least_laser = () => {
        let sum = 0
        for(let i = randomCount; i >= leastCount; --i) {
            sum += math_C(laserCount, i) *
                    math_C(inkCount, randomCount - i) / 
                    math_C(allCount, randomCount)
        }
        return toFix(sum)
    }
    // print(P_least())
    return [P_exactly_ink, P_exactly_laser, P_least_ink(), P_least_laser()]


}

/**
 * 
 * @param  {number: A,
 *          number: B,
 *          number: C
 *          number: A and B
 *          number: A and C
 *          number: B and C
 *          number: A and B and C
 * } arr 
 * @returns [number: P(A | B)
 *           number: P(A | B or C)
 *           number: P(A | A or B or C)
 *           number: P(A or B | C)
 * ]
 */
const three_2 = (...arr) => {
    let allA = arr[0]
    let allB = arr[1]
    let allC = arr[2]
    let all_a_and_b = arr[3]
    let all_a_and_c = arr[4]
    let all_b_and_c = arr[5]
    let a_and_b_and_c = arr[6]

    let a_and_b = toFix(all_a_and_b - a_and_b_and_c)
    let a_and_c = toFix(all_a_and_c - a_and_b_and_c)
    let b_and_c = toFix(all_b_and_c - a_and_b_and_c)

    let a = toFix(allA - a_and_b_and_c - a_and_b - a_and_c)
    let b = toFix(allB - a_and_b_and_c - a_and_b - b_and_c)
    let c = toFix(allC - a_and_b_and_c - b_and_c - a_and_c)

    let outside = toFix(1 
                        - a_and_b_and_c
                        - a_and_b - a_and_c - b_and_c
                        - a - b - c)

    let P_a_bar_b = toFix(toFix(a_and_b + a_and_b_and_c) / allB)
    // print(P_a_bar_b)
    let P_a_bar__b_or_c = toFix(toFix(a_and_b_and_c + a_and_b + a_and_c)
                            / toFix(b + c + a_and_b + b_and_c + a_and_c + a_and_b_and_c))
    // print(P_a_bar__b_or_c)
    let P_a_bar__a_or_b_or_c = toFix(toFix(allA) / toFix(1 - outside))
    // print(P_a_bar__a_or_b_or_c)

    let P_a_or_b_bar_c = toFix(toFix(a_and_c + b_and_c + a_and_b_and_c) / toFix(allC))
    // print(toFix(a_and_c + b_and_c + a_and_b_and_c))
    // print(toFix(allC))
    // print(P_a_or_b_bar_c)

    return [P_a_bar_b, P_a_bar__b_or_c, 
            P_a_bar__a_or_b_or_c, P_a_or_b_bar_c]

    
}

/**
 * @param  {number: P(A1),
 *          number: P(A2),
 *          number: P(A3),
 *          number: P(B | A1),
 *          number: P(B | A2), 
 *          number: P(B | A3)
 * } arr 
 * @returns [
 *              [P(A1 and B), P(A1 and notB),
 *               P(A2 and B), P(A2 and notB),
 *               p(A3 and B), P(A3 and notB)
 *              ],
 *              [P(B), P(notB)],
 *              [P(A1 | B), P(A1 | notB),
 *               P(A2 | B), P(A2 | notB),
 *               P(A3 | B), P(A3 | notB)
 *              ]
 *          ]
 */
const four_1 = (...arr) => {
    let a1 = arr[0]
    let a2 = arr[1]
    let a3 = arr[2]
    let b_bar_a1 = arr[3]
    let b_bar_a2 = arr[4]
    let b_bar_a3 = arr[5]

    let notB_bar_a1 = toFix(1 - b_bar_a1)
    let notB_bar_a2 = toFix(1 - b_bar_a2)
    let notB_bar_a3 = toFix(1 - b_bar_a3)


    let P_a1_and_b = toFix(a1 * b_bar_a1)
    let P_a1_and_notB = toFix(a1 * notB_bar_a1)

    let P_a2_and_b = toFix(a2 * b_bar_a2)
    let P_a2_and_notB = toFix(a2 * notB_bar_a2)

    let P_a3_and_b = toFix(a3 * b_bar_a3)
    let P_a3_and_notB = toFix(a3 * notB_bar_a3)

    let P_b = toFix(P_a1_and_b + P_a2_and_b + P_a3_and_b)
    let P_notB = toFix(P_a1_and_notB + P_a2_and_notB + P_a3_and_notB)

    let P_a1_bar_b = toFix(P_a1_and_b / P_b)
    let P_a2_bar_b = toFix(P_a2_and_b / P_b)
    let P_a3_bar_b = toFix(P_a3_and_b / P_b)

    let P_a1_bar_notB = toFix(P_a1_and_notB / P_notB)
    let P_a2_bar_notB = toFix(P_a2_and_notB / P_notB)
    let P_a3_bar_notB = toFix(P_a3_and_notB / P_notB)

    return [
                [P_a1_and_b, P_a1_and_notB,
                P_a2_and_b, P_a2_and_notB,
                P_a3_and_b, P_a3_and_notB],
                [P_b, P_notB],
                [P_a1_bar_b, P_a1_bar_notB,
                P_a2_bar_b, P_a2_bar_notB,
                P_a3_bar_b, P_a3_bar_notB]
            ]


}

/**
 * 
 * @param {key: x => value: P(x)} map (X 以及 X 的值)
 * @param {number} most (至多)
 * @param {number} least (至少)
 * @param {[number: min, number: max]} between (區間(包含最小與最大))
 * @param {[number: min, number: max]} strictlyBet (嚴格區間(不包含最小與最大))
 * @returns [ number: P(most) 至多,
 *            number: P(least) 至少,
 *            number: P(between) 區間,
 *            number: P(strictlyBet) 嚴格區間
 * ]
 */
const four_2 = (map, most, least, between, strictlyBet) => {
    // print(map)
    let P_most = () => {
        let sum = 0
        for(let item of map) {
            if (item[0] <= most) {
                sum += item[1]
            }
        }
        return toFix(sum)
    }

    // print(P_most())
    
    let P_least = () => {
        let sum = 0
        for(let item of map) {
            if (item[0] >= least) {
                sum += item[1]
            }
        }
        return toFix(sum)
    }

    // print(P_least())

    let P_between = () => {
        let sum = 0
        for(let item of map) {
            if (item[0] >= between[0] && item[0] <= between[1]) {
                sum += item[1]
            }
        }
        return toFix(sum)
    }
    // print(P_between())

    let P_strictlyBet = () => {
        let sum = 0
        for(let item of map) {
            if (item[0] > strictlyBet[0] && item[0] < strictlyBet[1]) {
                sum += item[1]
            }
        }
        return toFix(sum)
    }
    // print(P_strictlyBet())

    return [P_most(), P_least(), P_between(), P_strictlyBet()]
}

/**
 * 
 * @param {key: x => value: P(x)} map 
 * @returns [Map: fMap,
 *          number: E(x),
 *          number: V(x)
 *          number: δ(x)
 * ]
 */
const five_1 = (map) => {
    let fMap = new Map()
    fMap.set("0", 0)
    for (let item1 of map) {
        let sum = 0
        for(let item2 of map) {
            if (item2[0] <= item1[0])
                sum += item2[1]
        }
        fMap.set(item1[0], toFix(sum))
    }
    // for(let i = 0; i < arr[0].length; ++i) {
    //     let sum = 0;

    //     for(let j = 0; j <= i; ++j) {
    //         sum += arr[1][j]
    //     }
    //     fMap.set(arr[0][i], toFix(sum))
    //     // fArr[arr[0][i]] = toFix(sum)
    // }
    // print(fMap)

    let E_of_x = () => {
        let sum = 0;
        for(let item of map) {
            sum += toFix(item[0] * item[1])
        }
        // for(let i = 0; i < arr[0].length; ++i) {
        //     sum += toFix(arr[0][i] * arr[1][i])
        // }
        return toFix(sum)
    }
    // print(E_of_x())

    let V_of_x = () => {
        let sum = 0;
        for(let item of map) {
            sum += toFix(((item[0] - E_of_x()) ** 2) * item[1])
        }
        // for(let i = 0; i < arr[0].length; ++i) {
        //     sum += toFix(Math.pow((arr[0][i] - E_of_x()), 2) * arr[1][i])
        // }
        return toFix(sum)
    }
    // print(V_of_x())

    let O_of_x = toFix(V_of_x() ** 0.5)

    // print(O_of_x)

    return [fMap, E_of_x(), V_of_x(), O_of_x]
}

/**
 * 
 * @param {key: x => value: P(x)} map
 * @param {算式} str 
 * @returns [
 *              [
    *              number: E(x),
    *              numebr: E(x^2),
    *              number: V(x)
 *              ],
 *              [
 *                  Map: YMap,
 *                  number: E(y)
 *                  number: E(y^2)
 *                  number: V(y)
 *                  number: δ(y)(懶得找符號)
 *              ]
 *          ]
 */
const five_2 = (map, str) => {
    let E_of_x = () => {
        let sum = 0;
        for (let i of map) {
            sum += toFix(i[0] * i[1])
        }
        return toFix(sum)
    }
    // print(E_of_x())
    
    let E_of_pow2x = () => {
        let sum = 0;
        for (let i of map) {
            sum += toFix(i[0] ** 2 * i[1])
        }
        return toFix(sum)
    }
    // print(E_of_pow2x())

    let V_of_x = () => {
        let sum = 0;
        for (let i of map) {
            sum += toFix(i[0] ** 2 * i[1])
        }
        return toFix(sum - E_of_x() ** 2)
    }
    // print(V_of_x())
    
    const reg1 = /([^0-9])x/gi
    const reg2 = /([0-9])x/gi
    str = str.replaceAll("^", "**")
    // print(str)

    let YMap = () => {
        let tmpMap = new Map()
        for(let item of map) {
            let y = toFix(eval(str.replaceAll(reg2, `$1 * ${item[0]}`).replaceAll(reg1, `$1${item[0]}`)))
            tmpMap.set(y, item[1])
        }
        return tmpMap
    }
    // print(YMap())

    
    let E_of_y = () => {
        let sum = 0;
        for (let i of YMap()) {
            sum += toFix(i[0] * i[1])
        }
        return toFix(sum)
    }
    // print(E_of_y())
    
    let E_of_pow2y = () => {
        let sum = 0;
        for (let i of YMap()) {
            sum += toFix(i[0] ** 2 * i[1])
        }
        return toFix(sum)
    }
    // print(E_of_pow2y())


    let V_of_y = toFix(E_of_pow2y() - E_of_y() ** 2)
    // print(V_of_y)

    let O_of_y = toFix(V_of_y ** 0.5)
    // print(O_of_y)

    return [[E_of_x(), E_of_pow2x(), V_of_x()], [YMap(), E_of_y(), E_of_pow2y(), V_of_y, O_of_y]]
}

/**
 * 
 * @param {number} n (隨機抽取n位)
 * @param {number} p (偏好S的機率 (PS: 如果不是給 P(S) 的話，需要 1-p ))
 * @param {number} exactlyX (剛好X位)
 * @param {number} leastX (至少X位)
 * @param {numebr} mostX (最多X位)
 * @returns [
 *              number: B(剛好X位)
 *              number: B(至少X位)
 *              number: B(最多X位)
 *          ]
 */
const six_1 = (n, p, exactlyX, leastX, mostX) => {
    let math_B = (x) => {
        return toFix(math_C(n, x) * (p ** x) * ((1 - p) ** (n - x)))
    }
    let B_exactly = () => {
        return toFix(math_B(exactlyX))
    }
    // print(B_exactly())

    let B_least = () => {
        let sum = 0;
        for(let i = leastX; i <= n; ++i) {
            sum += math_B(i)
        }
        return sum
    }
    // print(B_least())
    let B_most = () => {
        let sum = 0;
        for(let i = 0; i <= mostX; ++i) {
            sum += math_B(i)
        }
        return sum
    }
    // print(B_most())

    return [B_exactly(), B_least(), B_most()]
}

/**
 * 
 * @param {number} n (隨機抽取n位)
 * @param {number} M (有貼標籤的數量)
 * @param {number} N (總數)
 * @param {number} exactlyX (剛好X位)
 * @param {number} leastX (至少X位)(可能沒有，沒有填0)
 * @param {numebr} mostX (最多X位)
 * @returns [
 *              number: P(剛好X位)
 *              number: P(至少X位)
 *              number: P(最多X位)
 *          ]
 */
const six_2 = (n, M, N, exactlyX, leastX, mostX) => {
    let math_H = (x) => {
        // print(math_C(M, x))
        // print(math_C(toFix(N - M), toFix(n - x)) )
        // print(math_C(M, x) * math_C(toFix(N - M), toFix(n - x)))
        // print(math_C(N, n))
        return toFix(math_C(M, x) * math_C(toFix(N - M), toFix(n - x)) / math_C(N, n))
    }
    let P_exactly = math_H(exactlyX)
    // print(P_exactly)
    // print("===================")

    
    let P_least = () => {
        let sum = 0;
        for(let i = leastX; i <= n; ++i) {
            sum += math_H(i)
        }
        return sum
    }
    // print(P_least())
    // print("===================")

    
    let P_most = () => {
        let sum = 0;
        for(let i = 0; i <= mostX; ++i) {
            sum += math_H(i)
        }
        return sum
    }
    // print(P_most())
    // print("===================")
    return [P_exactly, P_least(), P_most()]

}

/**
 * 
 * @param {number} lambda
 * @param {number} exactlyX (剛好X位)
 * @param {numebr} mostX (最多X位)
 * @returns [
 *              number: P(剛好X位)
 *              number: P(最多X位)
 *          ]
 */
const seven_1 = (lambda, exactlyX, mostX) => {
    let math_P = (x) => {
        return toFix(Math.exp(-lambda) * (lambda ** x) / starMul(x))
    }
    let P_exactly = math_P(exactlyX)
    // print(P_exactly)
    // print("===================")

    
    let P_most = () => {
        let sum = 0;
        for(let i = 0; i <= mostX; ++i) {
            sum += math_P(i)
        }
        return sum
    }
    // print(P_most())
    // print("===================")
    return [P_exactly, P_most()]
}

const seven_2 = () => {

}



// print(math_C(6, 4))
// print(math_C(10, 8))
// print(round10(123456, 4))
// print(toFix(0.1+0.2))

// print(one_1(...[15.2, 16.8, 12.6, 13.2, 12.8, 
//     13.8, 16.3, 13.0, 12.7, 15.8,
//     19.2, 12.7, 15.6, 13.5, 12.9
// ]))

// print(one_2(94, 92, 94, 95, 90,
//             98, 90, 100, 85, 85,
//             115, 75, 125, 70, 60,
//             125, 40, 52, 55))

// print(two_1(0.5, 0.4, 0.25))

// print(two_2(0.22, 0.25, 0.28,
//             0.11, 0.05, 0.07,
//             0.01))

// print(three_1(25, 10, 15, 6, 3, 3))

// print(three_2(0.14, 0.23, 0.37,
//             0.08, 0.09, 0.13,
//             0.05))

// print(four_1(0.5, 0.3, 0.2, 
//                 0.25, 0.2, 0.1))

// print(four_2(new Map([[0, 0.05], 
//                         [1, 0.1],
//                         [2, 0.15],
//                         [3, 0.25],
//                         [4, 0.2],
//                         [5, 0.15],
//                         [6, 0.1]]),
//             2, 3, [2, 5], [2, 5]))

// print(five_1(new Map([[1, 0.4],
//                         [2, 0.3],
//                         [3, 0.2],
//                         [4, 0.1]])))

// print(five_2(new Map([[4, 0.5],
//                         [6, 0.3],
//                         [8, 0.2]]), "20 + 3x + 0.5x^2"))

// print(six_1(6, 0.5, 3, 3, 1))

// print(six_2(10, 5, 25, 2, 2, 2))

// print(seven_1(4.5, 5, 5))

// print(seven_2())