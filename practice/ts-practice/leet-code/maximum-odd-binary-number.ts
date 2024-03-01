// https://leetcode.com/problems/maximum-odd-binary-number/submissions/1190837798/


function maximumOddBinaryNumber(s: string): string {
    const tLen = s.length;
    const ones = s.match(/1/g).join('');
    return ones.replace(/1$/, '0'.repeat(tLen-ones.length)+'1');
};