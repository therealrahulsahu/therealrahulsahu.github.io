let times = {
    all: {},
    div: {},
    non: {}
};

const totalTimes = a=>{
    if (times.all[a])
        times.all[a]++;
    else
        times.all[a] = 1;
}
;
const divTimes = a=>{
    if (times.div[a])
        times.div[a]++;
    else
        times.div[a] = 1;
}
;
const nonTimes = a=>{
    if (times.non[a])
        times.non[a]++;
    else
        times.non[a] = 1;
}
;

const generateTimes = (k,s)=>{
    times = {
        all: {},
        div: {},
        non: {}
    };
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            totalTimes(s[i]);
            totalTimes(s[j]);
            if ((s[i] + s[j]) % k === 0) {
                divTimes(s[i]);
                divTimes(s[j]);
            } else {
                nonTimes(s[i]);
                nonTimes(s[j]);
            }
        }
    }
}
;

const removeAllDivTimes = num=>{
    for(const key of Object.keys(times.all)){
        times.all[key]--;
        if(times.all[key]===0) delete times.all[key];
    }
    delete times.all[num];
    
    for(const key of Object.keys(times.div)){
        times.div[key]--;
        if(times.div[key]===0) delete times.div[key];
    }
    delete times.div[num];
};

function nonDivisibleSubset(k, s) {
    const never = new Set(s);
    generateTimes(k, s);
    debugger;
    for (const num of s) {
        if (times.all[num] === times.div[num]) {
            removeAllDivTimes(num);
        }
    }
    debugger;
    return never.size;
}

// console.log(nonDivisibleSubset(3, [1, 7, 2, 4]) === 3);
console.log(nonDivisibleSubset(7, [278,576,496,727,410,124,338,149,209,702,282,718,771,575,436])===11);
