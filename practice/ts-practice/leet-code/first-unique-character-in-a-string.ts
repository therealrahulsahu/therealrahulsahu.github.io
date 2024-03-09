// https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
* @return {number}
*/
var firstUniqChar = function(s) {
   const cache = new Set();
   for(let i=0; i<s.length; i++){
       let count=1;
       if(cache.has(s[i])) continue;

       for(let j=i+1;j<s.length;j++){
           if(s[i]===s[j]){
               count++;
               break;
           }
       }
       cache.add(s[i]);
       if(count===1) return i;
   }
   return -1;
};