// https://leetcode.com/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for(let ch of s){
        if(ch==='(' || ch==='{' || ch==='['){
            stack.unshift(ch);
        }else{
            const top = stack.shift();
            if(top === undefined) return false;
            if((top==='(' && ch!==')') || (top==='{' && ch!=='}') || (top==='[' && ch!==']')){
                return false;
            }
        }
    }

    return stack.length===0;
};