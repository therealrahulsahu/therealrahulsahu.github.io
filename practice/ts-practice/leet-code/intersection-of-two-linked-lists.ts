// https://leetcode.com/problems/intersection-of-two-linked-lists


(()=>{

    /**
     * Definition for singly-linked list.
     * function ListNode(val) {
     *     this.val = val;
     *     this.next = null;
     * }
     */

    /**
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    var getIntersectionNode = function(headA, headB) {
        const set = new Set();
        
        for(let iter=headA; iter; iter=iter.next){
            set.add(iter);
        }

        for(let iter=headB; iter; iter=iter.next){
            if(set.has(iter)) return iter;
        }
        return null;
    };


})()