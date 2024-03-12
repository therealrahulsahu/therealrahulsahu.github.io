// https://leetcode.com/problems/merge-sorted-array/


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge2 = function(nums1, m, nums2, n) {
    
    const swap = (a,b)=>[b,a];
    const insert = item=>{
        const len = nums2.length;
        for(let i=0;i<len;i++){
            if(nums2[i]>item){
                [nums2[i], item] = swap(nums2[i], item);
            }
        }
        nums2[len] = item;
    };

    const updateArray = i=>{
        
        const top = nums2[0];
        if(top!==undefined){
            if(i+(n-nums2.length)<m){
                if(nums1[i]>top){
                    nums2.shift();
                    insert(nums1[i]);
                    nums1[i] = top;
                }
            }else{
                nums1[i] = top;
                nums2.shift();
            }
            updateArray(i+1);
            
        }
    }

    updateArray(0);
};


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge2 = function(nums1, m, nums2, n) {
    
    const insert = item=>{
        const len = nums2.length;
        for(let i=len-1; i>=-1; i--){
            if(nums2[i]>item){
                nums2[i+1] = nums2[i];
            }else{
                nums2[i+1] = item;
                break;
            }
        }
    };

    const updateArray = i=>{
        
        const top = nums2[0];
        if(top!==undefined){
            if(i+(n-nums2.length)<m){
                if(nums1[i]>top){
                    nums2.shift();
                    insert(nums1[i]);
                    nums1[i] = top;
                }
            }else{
                nums1[i] = top;
                nums2.shift();
            }
            updateArray(i+1);
            
        }
    }

    updateArray(0);
};

function merge(nums1, m, nums2, n) {
    for (var i = 0; i < n; nums1[i + m] = nums2[i++]);
    nums1.sort((a,b)=>a-b);
}