数组方法备忘录:
添加/删除元素:
push(...items) -从结尾添加元素
pop()一 从结尾提取元素,
shift()一从开头提取元素,
unshift(...items)一从开头添加元素
splice(pos，deleteount，...items) 一从 ndex 开始: 删除 deleteCount 元素并在当前位置插入元素slice(start，end)一它从所有元素的开始索引“start”复制到“end"(不包括end”)返回一个新的数组.concat(...items)一返回一个新数组: 复制当前数组的所有成员并向其中添加 items 。如果有任 items 是一个数组，那么就取其元素
查询元素:
index0f/lastIndex0f(item，pos) 一从 pos 找到 item，则返回索引否则返回 -1。
includes(value) 一如果数组有 value ，则返回 true，否则返回 false。
find/filter(func)一通过函数过滤元素，返回 true 条件的符合 find 函数的第一个值或符合 flter 函数的全部值.
findIndex 和 find 类似，但返回家引而不是值。
转换数组:
map(func)一从每个元素调用 func 的结果创建一个新数组
sort(func)一 将数组倒序排列，然后返回。
reverse()-在原地颠倒数组，然后返回它
split/join -将字符串转换为数组并返回
reduce(func，initial) - 通过为每人元表调用 fun 计算数组上的单人值并在调用之间传递中间结果迭代元素:
forEach(func)-为每个元素调用 func ，不返回任何东西其他: - Array.isArray(arr) 检查 arr 是否是一个数组
请注意，sort， reverse 和 splice 方法修改数组本身.
这些方法是最常用的方法，它们覆盖 99% 的用例。但是还有其他几个:
arr.some(fn)/arr.every(fn) 检查数组
在类似于 map 的数组的每个元素上调用函数 fn 。如果任何/所有结果为 true ，则返回 true，否则返回 false.arr.fill(value start, end)一从 start 到 end 用 value 重复填充数组
arr.copyWithin(target, start, end) - copies its elements from position start till position end into itself, at position target(overwrites existing)将其元素从 start 到 end 在 target 位置复制到本身(夏盖现有


map