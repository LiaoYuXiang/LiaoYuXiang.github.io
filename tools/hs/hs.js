const dom={
    package:document.querySelector('.package'),
    t1:document.querySelector('#t1'),
}

dom.t1.children[3].onclick=()=>{
    const ts=dom.t1
    const inarr=ts.children[1].value.split('\n')
    let lor=inarr[0].split(' ').length;
    for(let i=1;i<inarr.length;i++){
        if(lor>inarr[i].split(' ').length)
            lor=inarr[i].split(' ').length;
    }
    const dix=inarr[0].split(' ');
    const diy=inarr[1].split(' ');
    const vi=inarr[2].split(' ');
    let cxu=0;
    let cyu=0;
    let cxyd=0;
    for(let i=0;i<lor;i++){
        cxu+=dix[i]*vi[i];
    }
    for(let i=0;i<lor;i++){
        cyu+=diy[i]*vi[i];
    }
    for(let i=0;i<lor;i++){
        cxyd+=vi[i];
    }
    

    // console.log(outarr)
    ts.children[4].innerHTML=`結果:<br>Cx:${cxu/cxyd}
                                <br>Cy:${cyu/cxyd}`
}
