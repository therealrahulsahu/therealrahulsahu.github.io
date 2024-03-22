// https://leetcode.com/problems/add-digits

/**
 * @param {number} num
 * @return {number}
 */
var addDigits1 = function(num) {

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

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    if ( num == 0 ) return 0;
	return num%9 == 0 ? 9 : num%9;
};