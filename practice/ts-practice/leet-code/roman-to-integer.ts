// https://leetcode.com/problems/roman-to-integer/description/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const [I, V, X, L, C, D, M] = [1, 5, 10, 50, 100, 500, 1000];
    const len = s.length;

    let total = 0;
    let i = 0;
    while(i < len){
        if(s[i]==='C' && s[i+1]==='M'){
            total += M - C;
            i += 2;
        } else if(s[i]==='C' && s[i+1]==='D'){
            total += D - C;
            i += 2;
        } else if(s[i]==='X' && s[i+1]==='C'){
            total += C - X;
            i += 2;
        } else if(s[i]==='X' && s[i+1]==='L'){          
            total += L - X;
            i += 2;
        } else if(s[i]==='I' && s[i+1]==='X'){
            total += X - I;
            i += 2;
        } else if(s[i]==='I' && s[i+1]==='V'){
            total += V - I;
            i += 2;
        } else {
            switch(s[i]){
                case 'I':
                    total += I;
                    break;
                case 'V':
                    total += V;
                    break;
                case 'X':
                    total += X;
                    break;
                case 'L':
                    total += L;
                    break;
                case 'C':
                    total += C;
                    break;
                case 'D':
                    total += D;
                    break;
                case 'M':
                    total += M;
                    break;
            }
            i++;
        }
    }
    return total;
};

// Test cases
console.log(romanToInt('III') === 3);
console.log(romanToInt('IV') === 4);
console.log(romanToInt('IX') === 9);
console.log(romanToInt('LVIII') === 58);


console.log(romanToInt('CDIII') === 403);
console.log(romanToInt('CMIV') === 904);
console.log(romanToInt('XCIX') === 99);
console.log(romanToInt('DLVIII') === 558);