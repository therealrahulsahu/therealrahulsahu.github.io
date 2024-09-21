package org.tour;

class Solution1 {
    private int pivot(int[] nums){
        int st = 0, en=nums.length-1;

        while(st!=en){
            int mid = (st+en)/2;
            if(nums[mid]>nums[mid+1]){
                return mid;
            }else if(nums[mid]<nums[en]){
                en = mid;
            }else{
                st = mid;
            }
        }
        return -1;
    }
    private int search (int[] nums, int target, int st, int en){
        if(nums[st]==target){
            return st;
        }
        if(st==en){
            return -1;
        }else{
            if(st+1==en){
                if(nums[st]==target){
                    return st;
                }else if(nums[en]==target){
                    return en;
                }else{
                    return -1;
                }
            }
            int mid = (st+en)/2;
            if(nums[mid]==target){
                return mid;
            }else if(target>nums[mid]){
                return search(nums, target, mid+1, en);
            }else{
                return search(nums, target, st, mid-1);
            }
        }
    }
    public int search(int[] nums, int target) {
        int pv = pivot(nums);
        if(pv==-1){
            return search(nums, target, 0, nums.length-1);
        }else if(nums[0]<=target && target<=nums[pv]){
            return search(nums, target, 0, pv);
        }else{
            return search(nums, target, pv+1, nums.length-1);
        }
    }
}
