// https://leetcode.com/problems/delete-node-in-a-bst/


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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {

    const addIntoRight = (sR, sL)=>{
        
        for(let iter=sR; iter; iter=iter.left){
            if(iter.left===null){
                iter.left = sL;
                break;
            }
        }
        return sR ? sR : sL;
    };
    
    const T = (node, parent, isLeft)=>{
        if(node){
            if(node.val<key){
                T(node.right, node, false);
            }else if(node.val>key){
                T(node.left, node, true);
            }else{
                const sLeft = node.left;
                let sRight = node.right;

                sRight = addIntoRight(sRight, sLeft);

                if(parent){
                    if(isLeft){
                        parent.left = sRight;
                    }else{
                        parent.right = sRight;
                    }
                }else{
                    root = sRight;
                }
            }
        }
    };

    T(root, null, false);

    return root;
};


})();