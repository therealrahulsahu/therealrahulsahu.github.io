// https://leetcode.com/problems/intervals-between-identical-elements/description/

function getDistances1(arr) {
    const absDiff = (a, b) => Math.abs(a - b);
    const disDiff = (diffs)=>{
        const resp = [];
        for(let i = 1; i < diffs.length; i++){
            let sm = 0;
            for(let j=1; j < diffs.length; j++){
                if(i!==j){
                    sm += absDiff(diffs[i], diffs[j]);
                }
            }
            resp.push(sm);
        }
        return resp;
    };
    const distances = [];
    const hash = {};
    for(let i in arr){
        if(hash[arr[i]]){
            hash[arr[i]].push(i);
        } else {
            hash[arr[i]] = [0, i];
        }
    }
    console.log(hash);
    for(let num of arr){
        if(hash[num][0] === 0){
            hash[num] = disDiff(hash[num]);
        }
        distances.push(hash[num].shift());
    }
    return distances;
}

function getDistances2(arr) {
    const absDiff = (a, b) => Math.abs(a - b);
    const distances = [];
    const hash = {};
    for(let i in arr){
        const item = hash[arr[i]];
        if(item){
            let sm = 0;
            for(let prev of item){
                const diff = absDiff(i, prev.ind);
                sm += diff;
                prev.sm += diff;
            }
            item.push({ ind: i, sm: sm});
        } else {
            hash[arr[i]] = [{ ind: i, sm: 0 }];
        }
    }
    for(let num of arr){
        distances.push(hash[num].shift().sm);
    }
    return distances;
}

function getDistances3(arr) {
    const abs = (a, b) => Math.abs(a - b);
    const distances = [];
    const hash = {};
    for(let i in arr){
        const v = hash[arr[i]];
        let sm = 0;
        if(v){
            for(let prev of v){
                const diff = abs(i, prev);
                sm += diff;
                distances[prev] += diff;
            }
            v.push(i);
        } else {
            hash[arr[i]] = [i];
        }
        distances.push(sm);
    }
    return distances;
}

function getDistances4(arr) {
    const distances = [];
    const hash = {};
    for(let i in arr){
        const v = hash[arr[i]];
        let sm = 0;
        if(v){
            for(let prev of v){
                const diff = +i - prev;
                sm += diff;
                distances[prev] += diff;
            }
            v.push(i);
        } else {
            hash[arr[i]] = [i];
        }
        distances.push(sm);
    }
    return distances;
}

function getDistances(array) {
    const output = [];
    const obj = {};
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!obj[element]) {
            obj[element] = { currentIndex: 0, leftSum: 0, sum: 0, indexes: [] };
        }
        obj[element].sum += index;
        obj[element].indexes.push(index);
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const elementConfig = obj[element];
        const leftSideSum = elementConfig.leftSum;
        const tempElement = elementConfig.indexes[elementConfig.currentIndex];
        const rightSideSum = elementConfig.sum - tempElement - leftSideSum;
        const totalElementsOnLeftSide = elementConfig.currentIndex;
        const totalElementsOnRightSide =
            elementConfig.indexes.length - elementConfig.currentIndex - 1;
        const rightPart = rightSideSum - totalElementsOnRightSide * tempElement;
        const leftPart = totalElementsOnLeftSide * tempElement - leftSideSum;
        output.push(leftPart + rightPart);
        elementConfig.leftSum +=
            elementConfig.indexes[elementConfig.currentIndex];
        elementConfig.currentIndex += 1;
    }
    return output;
};

console.log(getDistances([2,1,3,1,2,3,3])) // [4,2,7,2,4,4,5]
console.log(getDistances([10,5,10,10])) // [5,0,3,4]
