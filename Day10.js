/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0, high = nums.length-1;
    while(low<=high) {
        let mid = parseInt((low+high)/2);
        if(mid!==nums.length-1 && nums[mid]<target && nums[mid+1]>=target)
            return mid+1;
        else if(mid!==nums.length-1 && nums[mid]<=target && nums[mid+1]>target)
            return mid;
        else if(mid===nums.length-1 && nums[mid]<target)
            return mid+1;
        else if(mid===nums.length-1 && nums[mid]===target)
            return mid;
        else if(mid===0 && nums[mid]>=target)
            return 0;
        else if(target > nums[mid])
            low = mid + 1;
        else if(target < nums[mid])
            high = mid - 1;
    }
    return -1;
};
