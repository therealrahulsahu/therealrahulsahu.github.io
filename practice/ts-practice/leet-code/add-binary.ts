// https://leetcode.com/problems/add-binary

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const ml = Math.max(a.length, b.length);
    let carry = 0;
    let res = "";
    for(let i=1; i<=ml; i++){
        if(a[a.length-i]==='1' && b[b.length-i]==='1'){
            res = carry + res;
            carry = 1;
        }else if((a[a.length-i]==='0' || a[a.length-i]===undefined) && (b[b.length-i]==='0' || b[b.length-i]===undefined)){
            res = carry + res;
            carry = 0;
        }else{
            res = +!carry + res;
        }
    }
    return (carry?'1':'') + res;
};