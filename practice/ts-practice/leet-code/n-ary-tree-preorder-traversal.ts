// https://leetcode.com/problems/n-ary-tree-preorder-traversal

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const out = [];
    const T = node=>{
        if(node){
            out.push(node.val);
            for(let child of node.children){
                T(child)
            }
        }
    };
    T(root);
    return out;
};