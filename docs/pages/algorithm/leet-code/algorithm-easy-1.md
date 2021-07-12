# 两数之和
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 问题
#### 题目描述
> 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
> 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

#### 示例
```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```
---

<br />

## 解法
### java

> #### 解法一：暴力法
> - 使用两层循环，外层循环计算当前元素与 target 之间的差值，内层循环寻找该差值，若找到该差值，则返回两个元素的下标。
> - 时间复杂度：O(n²)。
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] res = new int[2];
        for (int i = 0; i < nums.length; i++) {
            int dif = target - nums[i];
            // j = i + 1 的目的是减少重复计算和避免两个元素下标相同
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[j] == dif){
                    res[0] = i;
                    res[1] = j;
                    return res;
                }
            }
        }
        return res;
    }
}
```

> #### 解法二：利用 HashMap 减少查询时间
> - 在暴力法中，内层循环查找差值很浪费时间，那么如何减少查询时间呢？利用 HashMap 就可以减少查询时间。
> - 使用一层循环，每遍历到一个元素就计算该元素与 target 之间的差值，然后到 HashMap 中寻找该差值，如果找到，则返回两个元素在数组 nums 的下标，如果没有找到，则将当前元素存入 HashMap 中 (Key: nums[i], Value: i) 。
> - 时间复杂度：O(n)。
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer,Integer> map = new HashMap<>();
        int[] res = new int[2];
        for (int i = 0; i < nums.length; i++) {
            int dif = target - nums[i];
            if (map.get(dif) != null) {
                res[0] = map.get(dif);
                res[1] = i;
                return res;
            }
            map.put(nums[i],i);
        }
        return res;
    }
}
```

<br />

### javascript

> #### 解法一：暴力法
> - 使用两层循环，外层循环计算当前元素与 target 之间的差值，内层循环寻找该差值，若找到该差值，则返回两个元素的下标。
> - 时间复杂度：O(n²)。
> - [示例链接](https://zmx2321.github.io/blog_code/algorithm/leet-code/algorithm-easy/algorithm-easy-1/)
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var dif = target - nums[i];
        // j = i + 1 的目的是减少重复计算和避免两个元素下标相同
        for (var j = i + 1; j < nums.length; j++) {
            if(nums[j] == dif)
                return [i,j];
        }
    }
};
```

> #### 解法二：利用数组减少查询时间
> - 在暴力法中，内层循环查找差值很浪费时间，那么如何减少查询时间呢？利用数组就可以减少查询时间。
> - 使用一层循环，每遍历到一个元素就计算该元素与 target 之间的差值 dif，然后以 dif 为下标到数组temp中寻找，如果 temp[dif] 有值(即不是 undefined)，则返回两个元素在数组 numsnums 的下标，如果没有找到，则将当前元素存入数组 temp 中(下标: nums[i], Value: i) 。
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var temp = [];
    for(var i=0;i<nums.length;i++){
        var dif = target - nums[i];
        if(temp[dif] != undefined){
            return [temp[dif],i];
        }
        temp[nums[i]] = i;
    }
};
```

<br />

### python
> #### 解法一：暴力法
> 解题关键主要是想找到 num2 = target - num1，是否也在 list 中，那么就需要运用以下两个方法：
> - num2 in nums，返回 True 说明有戏
> - nums.index(num2)，查找 num2 的索引
```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        lens = len(nums)
        j=-1
        for i in range(lens):
            if (target - nums[i]) in nums:
                if (nums.count(target - nums[i]) == 1)&(target - nums[i] == nums[i]):#如果num2=num1,且nums中只出现了一次，说明找到是num1本身。
                    continue
                else:
                    j = nums.index(target - nums[i],i+1) #index(x,i+1)是从num1后的序列后找num2                
                    break
        if j>0:
            return [i,j]
        else:
            return []
```

---
<br />
<font color="#666" size="5">~End~</font>