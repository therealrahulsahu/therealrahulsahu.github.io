const timer = (toExecute)=>{
    return (...args)=>{
        const start = console.time();
        const resp = toExecute(...args);
        console.timeEnd();
        return resp;
    };
};
const nF = n=>n<2?1:n*nF(n-1);

const nCr = (n, r)=>nF(n)/(nF(r)*nF(n-r));

const npF = (n,r) =>{
    let fac = 1;
    for(let i=n;i>r;i--)fac*=i;
    return fac;
};

const npCr = (n, r)=>{
    if(r<n/2){
        r = n-r;
    }
    return npF(n,r)/nF(n-r);
};

const cache = {
    nF: {},
    npF: {}
};
const ncpCr = (n, r)=>{
    if(r<n/2){
        r = n-r;
    }
    let up,down;
    if(cache.npF[`${n},${r}`]){
        up = cache.npF[`${n},${r}`];
    }else{
        up = npF(n,r);
        cache.npF[`${n},${r}`] = up;
    }

    if(cache.nF[n-r]){
        down = cache.nF[n-r];
    }else{
        down = nF(n-r);
        cache.nF[n-r] = down;
    }
    return up/down;
};

const fCache = {};
const ncF = n=>{
    if(fCache[n]) return fCache[n]; else {
        let f = n<2?1:n*ncF(n-1);
        fCache[n] = f;
        return f;
    };
};
const ncfCr = (n, r)=>ncF(n)/(ncF(r)*ncF(n-r));

const nTri = (n, type)=>{
    let patt = ``;
    for(let i=0;i<=n;i++){
        for(let j=0;j<=i;j++){
            patt += `${type(i,j)} `;
        }
        patt+='\n';
    }
    // return patt;
}

const size = 1200;
// console.log(timer(nTri)(size, nCr));
// console.log(timer(nTri)(size, npCr));
// console.log(timer(nTri)(size, ncpCr));
console.log(timer(nTri)(size, ncfCr))

// console.log(timer(nF)(1100));
// console.log(timer(ncF)(1100));
// console.log(timer(ncF)(1100));
//debugger;
