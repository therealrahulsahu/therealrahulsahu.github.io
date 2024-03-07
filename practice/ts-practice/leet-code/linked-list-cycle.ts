// https://leetcode.com/problems/linked-list-cycle/submissions/1196405587/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    const hash = new Set();
    let iter = head;
    while(iter){
        if(hash.has(iter)) return true;
        hash.add(iter);
        iter = iter.next;
    }
    return false; 
};