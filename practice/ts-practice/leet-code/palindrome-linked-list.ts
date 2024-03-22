// https://leetcode.com/problems/palindrome-linked-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const inArray = [];

    for(let i=head; i; i=i.next){
        inArray.push(i.val);
    }

    const len = inArray.length;
    const half = Math.ceil(len/2);

    for(let i=0; i<half;i++){
        if(inArray[i]!==inArray[len-1-i]){
            return false;
        }
    }

    return true;
};