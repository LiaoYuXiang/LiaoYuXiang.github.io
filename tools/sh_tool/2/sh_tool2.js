const dom={
    package:document.querySelector('.package'),
    ts7_1:document.querySelector('#ts7_1'),
    ts7_2:document.querySelector('#ts7_2'),
}

dom.ts7_1.children[3].onclick=()=>{
    const ts=dom.ts7_1
    let inarr=ts.children[1].value.split(' ')
    inarr.forEach((element,indexm,arr) => {
        arr[indexm]=parseFloat(element)
    });
    

    let outarr=seven_1(...inarr)
    // console.log(...inarr)
    ts.children[4].innerHTML=`結果:
        P(剛好X位):${outarr[0].toFixed(5)}
    <br>P(最多X位):${outarr[1].toFixed(5)}`
}


