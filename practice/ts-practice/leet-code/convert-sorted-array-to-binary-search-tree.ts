// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


(()=>{

    
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
    /*
     * @param {number[]} nums
     * @return {TreeNode}
     */
    var sortedArrayToBST = function(nums) {
        
        const gen = (i, j)=>{
            if(i<=j){
                const mid = Math.ceil((i+j)/2);
                return new TreeNode(
                    nums[mid],
                    gen(i, mid-1),
                    gen(mid+1, j)
                );
            }else{
                return null;
            }
        };

        return gen(0, nums.length-1);
    };


})()