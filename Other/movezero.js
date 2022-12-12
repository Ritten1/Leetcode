// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]

//遍历nums，遇到为0的数，将其删除，然后在最后添加一个0，重置下标，继续从当前位置开始判断。
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (j++ < nums.length) {
      if (nums[i] === 0) {
        nums.splice(i, 1);
        nums.push(0);
        i--;
      }
    }
  }
};

//【双指针+快速排序思想】方法

//两个指针i和j
let j = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] != 0) {
    //当前元素!=0，就把其交换到左边，等于0的交换到右边
    if (nums[i] != 0) {
      let tmp = nums[i];
      nums[i] = nums[j];
      nums[j++] = tmp;
    }
  }
}
