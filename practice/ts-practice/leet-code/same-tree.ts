// https://leetcode.com/problems/same-tree/submissions/1196357396/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    const compare = (t1, t2)=>{
        if(t1===null && t2===null){
            return true;
        // @ts-ignore
        }else if((t1===null) ^ (t2===null)){
            return false;   
        }else{
            return (t1.val===t2.val) && compare(t1.left, t2.left) && compare(t1.right, t2.right);
        }
    };

    return compare(p, q);
};