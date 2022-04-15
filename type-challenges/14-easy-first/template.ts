// 方法一: 判断是否继承自空数组类型
type First<T extends any[]> = T extends [] ? never : T[0]

// 方法二: 判断其数组长度是否为0
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

// 方法三: 遍历T数组, 查询T[0]是否在数组中
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// type test = First<[3, 2, 1]>
// T extends []
// 解释: extends 可以用来做判断语句