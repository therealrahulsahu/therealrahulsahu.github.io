// https://leetcode.com/problems/add-two-numbers/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {
    
    let iter1 = l1;
    let iter2 = l2;
    let carry = 0;
    let resp = null;
    let iterResp = null;
    const addVal = v=>{
        if(resp){
            iterResp.next = new ListNode(v, null);
            iterResp = iterResp.next;
        }else{
            resp = new ListNode(v, null);
            iterResp = resp;
        }
    };

    while(iter1 || iter2){
        const sum = ((iter1 && iter1.val)||0) + ((iter2 && iter2.val)||0) + carry;
        carry = Math.floor(sum/10);
        addVal(sum%10);
        iter1 = (iter1 && iter1.next)||null;
        iter2 = (iter2 && iter2.next)||null;
    }
    if(carry===1)addVal(1);
    return resp;
};

console.log(addTwoNumbers(new ListNode(9, new ListNode(9, new ListNode(9, null))), new ListNode(9, null))) // 7 -> 0 -> 8