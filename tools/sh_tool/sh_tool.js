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
    ts.children[4].innerHTML=`結果:<br>平均:${outarr[0].toFixed(5)}
                                <br>M中位數:${outarr[1]}
                                <br>S平方:${outarr[2].toFixed(5)}
                                <br>S:${outarr[3].toFixed(5)}
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
    <br>A and B':${outarr[1].toFixed(5)}
    <br>B and A':${outarr[2].toFixed(5)}
    <br>(AB)':${outarr[3].toFixed(5)}
    <br>P(A and B):${outarr[4].toFixed(5)}
    <br>P(A' or B'):${outarr[5].toFixed(5)}
    <br>P(只有其中一個):${outarr[6].toFixed(5)}`
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
    P(A1 or A2):${outarr[0].toFixed(5)}
    <br>P(A1' and A2'):${outarr[1].toFixed(5)}
    <br>P(A1 or A2 or A3):${outarr[2].toFixed(5)}
    <br>P(A1' and A2' and A3'):(outside)${outarr[3].toFixed(5)}
    <br>P(A1' and A2' and A3):${outarr[4].toFixed(5)}
    <br>P((A1' and A2') or A3):${outarr[5].toFixed(5)}`
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
        B剛好機率:${outarr[0].toFixed(5)}
    <br>A剛好機率:${outarr[1].toFixed(5)}
    <br>B至少機率:${outarr[2].toFixed(5)}
    <br>A至少機率:${outarr[3].toFixed(5)}`
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
        P(A | B):${outarr[0].toFixed(5)}
    <br>P(A | B or C):${outarr[1].toFixed(5)}
    <br>P(A | A or B or C):${outarr[2].toFixed(5)}
    <br>P(A or B | C):${outarr[3].toFixed(5)}`
}
dom.ts4_1.children[3].onclick=()=>{
    const ts=dom.ts4_1
    let inarr=ts.children[1].value.split(' ')
    inarr.forEach((element,indexm,arr) => {
        arr[indexm]=parseFloat(element)
    });
    

    let outarr=four_1(...inarr)
    ts.children[4].innerHTML=`結果:
        P(A1 and B):${outarr[0][0].toFixed(5)}
    <br>P(A1 and B'):${outarr[0][1].toFixed(5)}
    <br>P(A2 and B):${outarr[0][2].toFixed(5)}
    <br>P(A2 and B'):${outarr[0][3].toFixed(5)}
    <br>P(A3 and B):${outarr[0][4].toFixed(5)}
    <br>P(A3 and B'):${outarr[0][5].toFixed(5)}
    <br>P(B):${outarr[1][0].toFixed(5)}
    <br>P(B'):${outarr[1][1].toFixed(5)}
    <br>P(A1 | B):${outarr[2][0].toFixed(5)}
    <br>P(A1 | B'):${outarr[2][1].toFixed(5)}
    <br>P(A2 | B):${outarr[2][2].toFixed(5)}
    <br>P(A2 | B'):${outarr[2][3].toFixed(5)}
    <br>P(A3 | B):${outarr[2][4].toFixed(5)}
    <br>P(A3 | B'):${outarr[2][5].toFixed(5)}`
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
        P(most) 至多: ${outarr[0].toFixed(5)}
    <br>P(least) 至少: ${outarr[1].toFixed(5)}
    <br>P(between) 區間: ${outarr[2].toFixed(5)}
    <br>P(strictlyBet) 嚴格區間:${outarr[3].toFixed(5)}`
}
dom.ts5_1.children[3].onclick=()=>{
    const ts=dom.ts5_1
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
    
    let outarr=five_1(inmap)
    // console.log(outarr[0].keys())
    ts.children[4].innerHTML=`結果:
        fMap<br>${[...outarr[0].keys()]}
    <br>${[...outarr[0].values()]}<br>
    <br>E(x)${outarr[1].toFixed(5)}
    <br>V(x)${outarr[2].toFixed(5)}
    <br>δ(x)${outarr[3].toFixed(5)}`
}
dom.ts5_2.children[3].onclick=()=>{
    const ts=dom.ts5_2
    let inarr=ts.children[1].value.split('\n')
    let inarr01=[]
    for(i of inarr){
        inarr01.push(i.split(' '))
    }
    for(i in inarr01){
        if(i>2)break
        for(j in inarr01[i]){
            inarr01[i][j]=parseFloat(inarr01[i][j])
        }
    }
    // console.log(inarr01)
    const inmap = new Map()
    for(i in inarr01[0]){
        inmap.set(inarr01[0][i],inarr01[1][i])
    }
    
    let outarr=five_2(inmap,inarr[2])
    // console.log(inmap,inarr[2])
    // console.log(outarr)
    ts.children[4].innerHTML=`結果:
        E(x):${outarr[0][0].toFixed(5)}
    <br>E(x^2):${outarr[0][1].toFixed(5)}
    <br>V(x):${outarr[0][2].toFixed(5)}
    <br>
    <br>YMap:
    <br>${[...outarr[1][0].keys()]}
    <br>${[...outarr[1][0].values()]}<br>
    <br>E(y):${outarr[1][1].toFixed(5)}
    <br>E(y^2):${outarr[1][2].toFixed(5)}
    <br>V(y):${outarr[1][3].toFixed(5)}
    <br>δ(y):${outarr[1][4].toFixed(5)}`
}
dom.ts6_1.children[3].onclick=()=>{
    const ts=dom.ts6_1
    let inarr=ts.children[1].value.split(' ')
    inarr.forEach((element,indexm,arr) => {
        arr[indexm]=parseFloat(element)
    });
    

    let outarr=six_1(...inarr)
    // console.log(...inarr)
    ts.children[4].innerHTML=`結果:
        P(剛好X位):${outarr[0].toFixed(5)}
    <br>P(至少X位):${outarr[1].toFixed(5)}
    <br>P(最多X位):${outarr[2].toFixed(5)}`
}
dom.ts6_2.children[3].onclick=()=>{
    const ts=dom.ts6_2
    let inarr=ts.children[1].value.split(' ')
    inarr.forEach((element,indexm,arr) => {
        arr[indexm]=parseFloat(element)
    });
    

    let outarr=six_2(...inarr)
    // console.log(...inarr)
    ts.children[4].innerHTML=`結果:
        P(剛好X位):${outarr[0].toFixed(5)}
    <br>P(至少X位):${outarr[1].toFixed(5)}
    <br>P(最多X位):${outarr[2].toFixed(5)}`
}


