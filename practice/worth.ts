type Transaction = [number, number, number][];
const pgim:Transaction = [
    [1094.149, 58.49, 58],
    [597.648, 58.46, 60],
    [204.908, 58.46, 60],
    [1698.429, 47.10, 305],
    [872.747, 45.83, 311],
    [733.101, 47.74, 337],
    [416.906, 47.97, 361],
    [102.939, 48.57, 375]
];
const quant:Transaction = [
    [258.001, 232.55, 25],
    [710.29, 197.09, 86]
];
const axis:Transaction = [
    [12.866, 97.15, 10],
    [517.305, 96.65, 31],
    [10.59, 94.42, 44],
    [732.564, 95.55, 59],
    [10.775, 92.8, 74],
    [397.031, 88.15, 122],
    [132.094, 75.7, 256],
    [264.188, 75.7, 257],
    [396.281, 75.7, 256],
    [528.375, 75.7, 256],
    [528.375, 75.7, 256],
    [528.375, 75.7, 256],
    [1320.938, 75.7, 256],
    [528.375, 75.7, 256],
    [132.094, 75.7, 256],
    [118.884, 75.7, 256],
    [13.209, 75.7, 256],
    [1320.938, 75.7, 256],
    [68.033, 73.49, 273],
    [68.033, 73.49, 273],
];

// date 01 Feb 24
const [Q, P, D] = [0, 1, 2];
const today: { pgim: number, quant: number, axis: number } = {
    pgim: 59.41,
    quant: 249.01,
    axis: 99.67
}

const averager = (data:Transaction, top:number, bottom:number)=>{
    const upper = data.reduce((t, v)=>t+=(v[bottom]*v[top]), 0);
    const lower = data.reduce((t, v)=>t+=(v[bottom]), 0);
    return upper/lower;
};
const timeAvg = (data:Transaction):number => {
    return averager(data, D, Q);
};
const priceAvg = (data:Transaction):number=>{
    return averager(data, P, Q);
};

const inValue = (data:Transaction):number=>{
    return data.reduce((t, v)=>t+=(v[P]*v[Q]), 0);
};

const outValue = (data:Transaction, price:number)=>{
    return data.reduce((t, v)=>t+=(v[Q]*price), 0);
};

const profit = (data:Transaction, price:number)=>{
    return outValue(data, price) - inValue(data);
};

console.log(`Time Avg pgim: ${timeAvg(pgim)}`);
console.log(`Time Avg quant: ${timeAvg(quant)}`);
console.log(`Time Avg axis: ${timeAvg(axis)}`);

console.log(`Price Avg pgim: ${priceAvg(pgim)}`);
console.log(`Price Avg quant: ${priceAvg(quant)}`);
console.log(`Price Avg axis: ${priceAvg(axis)}`);

console.log(`In Val pgim: ${inValue(pgim)}`);
console.log(`In Val quant: ${inValue(quant)}`);
console.log(`In val axis: ${inValue(axis)}`);

console.log(`Out Val pgim: ${outValue(pgim, today.pgim)}`);
console.log(`Out Val quant: ${outValue(quant, today.quant)}`);
console.log(`Out Val axis: ${outValue(axis, today.axis)}`);

console.log(`Profit pgim: ${profit(pgim, today.pgim)}`);
console.log(`Profit quant: ${profit(quant, today.quant)}`);
console.log(`profit axis: ${profit(axis, today.axis)}`);
