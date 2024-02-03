var pgim = [
    [1094.149, 58.49, 58],
    [597.648, 58.46, 60],
    [204.908, 58.46, 60],
    [1698.429, 47.10, 305],
    [872.747, 45.83, 311],
    [733.101, 47.74, 337],
    [416.906, 47.97, 361],
    [102.939, 48.57, 375]
];
var quant = [
    [258.001, 232.55, 25],
    [710.29, 197.09, 86]
];
var axis = [
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
var _a = [0, 1, 2], Q = _a[0], P = _a[1], D = _a[2];
var today = {
    pgim: 59.41,
    quant: 249.01,
    axis: 99.67
};
var averager = function (data, top, bottom) {
    var upper = data.reduce(function (t, v) { return t += (v[bottom] * v[top]); }, 0);
    var lower = data.reduce(function (t, v) { return t += (v[bottom]); }, 0);
    return upper / lower;
};
var timeAvg = function (data) {
    return averager(data, D, Q);
};
var priceAvg = function (data) {
    return averager(data, P, Q);
};
var inValue = function (data) {
    return data.reduce(function (t, v) { return t += (v[P] * v[Q]); }, 0);
};
var outValue = function (data, price) {
    return data.reduce(function (t, v) { return t += (v[Q] * price); }, 0);
};
var profit = function (data, price) {
    return outValue(data, price) - inValue(data);
};
console.log("Time Avg pgim: ".concat(timeAvg(pgim)));
console.log("Time Avg quant: ".concat(timeAvg(quant)));
console.log("Time Avg axis: ".concat(timeAvg(axis)));
console.log("Price Avg pgim: ".concat(priceAvg(pgim)));
console.log("Price Avg quant: ".concat(priceAvg(quant)));
console.log("Price Avg axis: ".concat(priceAvg(axis)));
console.log("In Val pgim: ".concat(inValue(pgim)));
console.log("In Val quant: ".concat(inValue(quant)));
console.log("In val axis: ".concat(inValue(axis)));
console.log("Out Val pgim: ".concat(outValue(pgim, today.pgim)));
console.log("Out Val quant: ".concat(outValue(quant, today.quant)));
console.log("Out Val axis: ".concat(outValue(axis, today.axis)));
console.log("Profit pgim: ".concat(profit(pgim, today.pgim)));
console.log("Profit quant: ".concat(profit(quant, today.quant)));
console.log("profit axis: ".concat(profit(axis, today.axis)));
