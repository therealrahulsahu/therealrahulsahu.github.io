// https://leetcode.com/problems/n-ary-tree-postorder-traversal

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const out = [];
    const T = node=>{
        if(node){
            for(let child of node.children){
                T(child)
            }
            out.push(node.val);
        }
    };
    T(root);
    return out;
};