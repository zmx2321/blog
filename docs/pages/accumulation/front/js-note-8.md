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

  - Array:

    1.push() // 向数组的末尾添加一个或多个元素，并返回新的长度
    2.pop() // 删除并返回数组的最后一个元素。
    3.unshift() // 向数组的开头添加一个或更多元素，并返回新的长度。
    4.shift() // 把数组的第一个元素从其中删除，并返回第一个元素的值。
    5.sort() // 数组排序，无参数时默认对String进行ASCLL码进行升序排序，可以传方法，对数组元素进行升序或者降序排序
    6.reverse() // 反转数组，将数组倒序排列
    7.concat() // 拼接数组，该方法会先创建当前数组的一个副本，无参数的情况下, 直接返回副本, 有参数的情况下, 将参数中的数组元素添加到数组的尾部
    8.slice() // 数组截取，基于当前数组中的一项或多项返回一个新的数组
    9.splice() // 数组增、删、改
       删除: 2个参数, 从第几项开始删和删除几项  splice(0, 1)
       插入: 起始位置, 要删除几项(填0), 要插入的项(可以写多个参数)  splice(1, 0, "black", "green",....)
       替换: 起始位置、要删除的项、要插入的项  splice(1, 1, "yellow")
    10.数组查找、过滤：
       1.indexOf()      参数：值     返回某个指定的值在数组中首次出现的位置，必须给定元素  
                        [1,2,2,3].indexOf(2) // 1
       2.lastIndexOf()  参数：值     返回某个指定的值在数组中最后一次出现的位置，必须给定元素 
                        [1,2,2,3].indexOf(2) // 2
       3.findIndex()    参数：函数   返回满足传入函数判定条件且在数组首次出现的元素的位置 
                        [1,2,2,3,4,5].findIndex( i => i === 2 ) // 1
       4.includes()     参数：值     判断一个数组是否包含一个指定的值，如果是返回 true，否则false 
                        [1,2,2,3].includes(2) // true
       5.map()          参数：函数   返回一个新数组，数组中的元素为原始数组元素按顺序依次调用函数处理后的值 
                        [4, 9, 16, 25].map(Math.sqrt) // 2,3,4,5
       6.filter()       参数：函数   返回一个新数组，返回满足传入函数判定条件的所有值 
                        [1,2,2,3,4,5].filter( i => i > 3 ) // 4,5
       7.find()         参数：函数   返回满足传入函数判定条件的第一个元素的值 
                        [1,2,2,3,4,5].find( i => i > 3 ) // 4
       8.some()       检测数组中的元素是否满足指定条件（函数提供）
       9.every()       检测数组所有元素是否都符合指定条件（函数提供）

  - Set:
        1.add() // 添加一个元素，支持链式操作 add('nihao') // 返回set
        2.delete() // 删除 delete('nihao') // true
        3.has() // 判断是否存在 has('nihao') // false
        4.可以通过Set里的值不会重复的特性进行两个数组合并去重等操作 
            let a = new Set([1,2,3]);
            let b = new Set([4,3,2]);
            Array.from(new Set([...a,...b])) // 1,2,3,4

  - Map:
        1. size()                   获取Map元素个数
        1. isEmpty()                判断Map是否为空
        1. clear()                  删除Map所有元素
        1. put(key, value)          向Map中增加元素（key, value) 
        1. remove(key)              删除指定key的元素，成功返回true，失败返回false
        1. get(key)                 获取指定key的元素值value，失败返回null
        1. element(index)           获取指定索引的元素（使用element.key，element.value获取key和value），失败返回null
        1. containsKey(key)         判断Map中是否含有指定key的元素
        1. containsValue(value)     判断Map中是否含有指定value的元素
        1. keys()                   获取Map中所有key的数组（array）
        1. values()                 获取Map中所有value的数组（array）
