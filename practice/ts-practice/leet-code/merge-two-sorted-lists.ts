// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
*/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
* @param {ListNode} list1
* @param {ListNode} list2
* @return {ListNode}
*/
var mergeTwoLists = function(list1, list2) {
   let resp = null;
   let [i, j] = [list1, list2];
   let rIter = null
   const setNew = (val)=>{
        // @ts-ignore
       const ny = new ListNode(val);
       if(resp===null){
           resp = ny;
       }else{
           rIter.next = ny;
       }
       rIter = ny;
   };

   while(i || j){
       if(i===null){
           setNew(j.val);
           j = j.next;
       }else if(j===null){
           setNew(i.val);
           i = i.next;
       }else if(i.val<j.val){
           setNew(i.val);
           i = i.next;
       }else{
           setNew(j.val);
           j = j.next;
       }
   }

   return resp;
};

var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    else if (!list2) return list1;
    else if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2
    }
};