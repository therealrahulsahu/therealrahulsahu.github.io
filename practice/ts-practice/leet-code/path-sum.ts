// https://leetcode.com/problems/path-sum/


(() => {


    /**
     * Definition for a binary tree node.
     * function TreeNode(val, left, right) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
     * }
     */
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    var hasPathSum = function(root, targetSum) {

        let flag = false;

        const check = (node, target)=>{
            if(node.left===null && node.right===null){
                if(node.val===target) flag = true;
            }else if(node.left===null){
                check(node.right, target-node.val);
            }else if(node.right===null){
                check(node.left, target-node.val);
            }else{
                check(node.right, target-node.val);
                check(node.left, target-node.val);
            }
        }

        root && check(root, targetSum);
        return flag;
    };


})()