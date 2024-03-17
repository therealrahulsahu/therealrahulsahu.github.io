//https://leetcode.com/problems/minimum-depth-of-binary-tree


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
     * @return {number}
     */
    var minDepth = function(root) {
        const depth = node =>{
            if(node){
                const left = depth(node.left);
                const right = depth(node.right);
                if(left===0 && right ===0) return 1;
                if(left===0) return 1+right;
                if(right===0) return 1+left;
                return 1+Math.min(left, right);
            }else{
                return 0;
            }
            
        };
        return depth(root);
    };

})()