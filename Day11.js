/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0, high = nums.length-1, mid = 0;
    while(mid<=high) {
        if(nums[mid]===0) {
            let temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            low += 1;
            mid += 1;
        } else if(nums[mid]===1)
            mid += 1;
        else if(nums[mid] === 2) {
            let temp = nums[high];
            nums[high] = nums[mid];
            nums[mid] = temp;
            high -= 1;
        }
    }
};
