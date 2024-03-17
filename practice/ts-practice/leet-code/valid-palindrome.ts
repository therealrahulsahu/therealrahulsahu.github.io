// https://leetcode.com/problems/valid-palindrome/


(()=>{


    /**
     * @param {string} s
     * @return {boolean}
     */
    var isPalindrome = function(s) {

        for(let i=0,j=s.length-1;i<s.length && j>=0;){
            if(!/[a-z0-9]/i.test(s[i])){
                i++;
            }else if(!/[a-z0-9]/i.test(s[j])){
                j--;
            }else{
                if(s[i].toLowerCase()!==s[j].toLowerCase()){
                    return false;
                }else{
                    i++;j--;
                }
            }
        }

        return true;
    };

})()