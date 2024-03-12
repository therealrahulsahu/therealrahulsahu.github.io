// https://leetcode.com/problems/remove-duplicates-from-sorted-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let iter = head;

    while(iter && iter.next){
        if(iter.val === iter.next.val){
            iter.next = iter.next.next;
        }else{
            iter = iter.next;
        }
    }

    return head;
};