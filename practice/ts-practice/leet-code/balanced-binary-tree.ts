// https://leetcode.com/problems/balanced-binary-tree


(()=>{

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
     * @return {boolean}
     */
    var isBalanced = function(root) {
        let flag = true;

        const depth = node=>{
            if(node && flag){
                const left = depth(node.left);
                const right = depth(node.right);
                if(Math.abs(left-right)>1) flag=false;
                return 1+Math.max(left, right);
            }else{
                return 0;
            }
        };

        depth(root);

        return flag;
    };

})()