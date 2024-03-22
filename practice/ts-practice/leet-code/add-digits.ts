// https://leetcode.com/problems/add-digits

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    let val = String(num);
    
    while(val.length>1){
        let total = 0;
        for(let v of val){
            total += (+v);
        }
        val = String(total);
    }

    return val;
};