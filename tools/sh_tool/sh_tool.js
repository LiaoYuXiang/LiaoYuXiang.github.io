const dom={
    package:document.querySelector('.package'),
    ts1_1:document.querySelector('#ts1_1'),
    ts1_2:document.querySelector('#ts1_2'),
    ts2_1:document.querySelector('#ts2_1'),
    ts2_2:document.querySelector('#ts2_2'),
    ts3_1:document.querySelector('#ts3_1'),
    ts3_2:document.querySelector('#ts3_2'),
    ts4_1:document.querySelector('#ts4_1'),
    ts4_2:document.querySelector('#ts4_2'),
    ts5_1:document.querySelector('#ts5_1'),
    ts5_2:document.querySelector('#ts5_2'),
    ts6_1:document.querySelector('#ts6_1'),
    ts6_2:document.querySelector('#ts6_2'),
}

dom.ts1_1.children[3].onclick=()=>{
    const ts=dom.ts1_1
    let inarr=ts.children[1].value.split(' ')
    inarr.forEach((element,indexm,arr) => {
        arr[indexm]=parseInt(element)
    });
    

    let outarr=one_1(...inarr)
    // console.log(outarr)
    ts.children[4].innerHTML=`結果:<br>平均:${outarr[0].toFixed(4)}
                                <br>M中位數:${outarr[1]}
                                <br>S平方:${outarr[2].toFixed(4)}
                                <br>S:${outarr[3].toFixed(4)}
                                <br>排序完:${outarr[4]}`
}

dom.ts1_2.children[3].onclick=()=>{
    const ts=dom.ts1_2
    let inarr=ts.children[1].value.split(' ')
    inarr.forEach((element,indexm,arr) => {
        arr[indexm]=parseFloat(element)
    });
    

    let outarr=one_2(...inarr)
    // console.log(...inarr)
    ts.children[4].innerHTML=`結果:<br>平均:${outarr[0]}
                                <br>upperForth:${outarr[1]}
                                <br>lowerForth:${outarr[2]}
                                <br>forthSpread:${outarr[3]}
                                <br>排序完:${outarr[4]}`
}
dom.ts2_1.children[3].onclick=()=>{
    const ts=dom.ts2_1
    let inarr=ts.children[1].value.split(' ')
    inarr.forEach((element,indexm,arr) => {
        arr[indexm]=parseFloat(element)
    });
    

    let outarr=two_1(...inarr)
    // console.log(...inarr)
    ts.children[4].innerHTML=`結果:A and B${outarr[0]}
    <br>A'B${outarr[1].toFixed(4)}
    <br>B'A${outarr[2].toFixed(4)}
    <br>'(AB)${outarr[3].toFixed(4)}
    <br>P(A and B)${outarr[4].toFixed(4)}
    <br>P('A or 'B)${outarr[5].toFixed(4)}
    <br>P(只有其中一個)${outarr[6].toFixed(4)}`
}
dom.ts2_2.children[3].onclick=()=>{
    const ts=dom.ts2_2
    let inarr=ts.children[1].value.split(' ')
    inarr.forEach((element,indexm,arr) => {
        arr[indexm]=parseFloat(element)
    });
    

    let outarr=two_2(...inarr)
    // console.log(...inarr)
    ts.children[4].innerHTML=`結果:
    P(A1 or A2)${outarr[0].toFixed(4)}
    <br>P('A1 and 'A2)${outarr[1].toFixed(4)}
    <br>P(A1 or A2 or A3)${outarr[2].toFixed(4)}
    <br>P('A1 and 'A2 and 'A3)(outside)${outarr[3].toFixed(4)}
    <br>P('A1 and 'A2 and A3)${outarr[4].toFixed(4)}
    <br>P(('A1 and 'A2) or A3)${outarr[5].toFixed(4)}`
}
dom.ts3_1.children[3].onclick=()=>{
    const ts=dom.ts3_1
    let inarr=ts.children[1].value.split(' ')
    inarr.forEach((element,indexm,arr) => {
        arr[indexm]=parseFloat(element)
    });
    

    let outarr=three_1(...inarr)
    // console.log(...inarr)
    ts.children[4].innerHTML=`結果:
        墨水剛好機率${outarr[0].toFixed(4)}
    <br>雷射剛好數量${outarr[1].toFixed(4)}
    <br>墨水至少數量${outarr[2].toFixed(4)}
    <br>雷射至少數量${outarr[3].toFixed(4)}`
}
dom.ts3_2.children[3].onclick=()=>{
    const ts=dom.ts3_2
    let inarr=ts.children[1].value.split(' ')
    inarr.forEach((element,indexm,arr) => {
        arr[indexm]=parseFloat(element)
    });
    

    let outarr=three_2(...inarr)
    // console.log(...inarr)
    ts.children[4].innerHTML=`結果:
        P(A | B)${outarr[0].toFixed(4)}
    <br>P(A | B or C)${outarr[1].toFixed(4)}
    <br>P(A | A or B or C)${outarr[2].toFixed(4)}
    <br>P(A or B | C)${outarr[3].toFixed(4)}`
}
dom.ts4_1.children[3].onclick=()=>{
    const ts=dom.ts4_1
    let inarr=ts.children[1].value.split(' ')
    inarr.forEach((element,indexm,arr) => {
        arr[indexm]=parseFloat(element)
    });
    

    let outarr=four_1(...inarr)
    ts.children[4].innerHTML=`結果:
        P(A1 and B)${outarr[0][0].toFixed(4)}
    <br>P(A1 and 'B)${outarr[0][1].toFixed(4)}
    <br>P(A2 and B)${outarr[0][2].toFixed(4)}
    <br>P(A2 and 'B)${outarr[0][3].toFixed(4)}
    <br>P(A3 and B)${outarr[0][4].toFixed(4)}
    <br>P(A3 and 'B)${outarr[0][5].toFixed(4)}
    <br>P(B)${outarr[1][0].toFixed(4)}
    <br>P('B)${outarr[1][1].toFixed(4)}
    <br>P(A1 | B)${outarr[2][0].toFixed(4)}
    <br>P(A1 | 'B)${outarr[2][1].toFixed(4)}
    <br>P(A2 | B)${outarr[2][2].toFixed(4)}
    <br>P(A2 | 'B)${outarr[2][3].toFixed(4)}
    <br>P(A3 | B)${outarr[2][4].toFixed(4)}
    <br>P(A3 | 'B)${outarr[2][5].toFixed(4)}`
}
dom.ts4_2.children[3].onclick=()=>{
    const ts=dom.ts4_2
    let inarr=ts.children[1].value.split('\n')
    let inarr01=[]
    for(i of inarr){
        inarr01.push(i.split(' '))

    }
    for(i in inarr01){
        for(j in inarr01[i]){
            inarr01[i][j]=parseFloat(inarr01[i][j])
        }
    }
    console.log(inarr01)
    const inmap = new Map()
    for(i in inarr01[0]){
        inmap.set(inarr01[0][i],inarr01[1][i])
    }
    
    let outarr=four_2(inmap,inarr01[2][0],inarr01[2][1],[inarr01[2][2],inarr01[2][3]],[inarr01[2][4],inarr01[2][5]])
    console.log(outarr)
    ts.children[4].innerHTML=`結果:
        P(most) 至多 ${outarr[0].toFixed(4)}
    <br>P(least) 至少 ${outarr[1].toFixed(4)}
    <br>P(between) 區間 ${outarr[2].toFixed(4)}
    <br>P(strictlyBet) 嚴格區間${outarr[3].toFixed(4)}`
}





