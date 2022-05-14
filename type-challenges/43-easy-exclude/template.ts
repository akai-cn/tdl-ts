type MyExclude<T, U> = T extends U ? never : T

// Exclude 关键字源码:
// type Exclude<T, U> = T extends U ? never : T
// 如果 T 是 U 的子类型, 那就直接返回 never, 否则返回 T
// 意为直接过滤出 T 与 U 相比, T 自身独有的属性

// never 类型: 表示永远不会有值的一种类型。(很抽象是不是) never是所有类型的子类型(更抽象了, 完全不理解)
// void 表示没有任何类型，never 表示永远不存在的值的类型。

// 类型条件的分配原则 上述代码解析
/**

type A = `Exclude<'key1' | 'key2', 'key2'>`

// 等价于

type A = `Exclude<'key1', 'key2'>` | `Exclude<'key2', 'key2'>`

// =>

type A = ('key1' extends 'key2' ? never : 'key1') | ('key'2 extends 'key2' ? never : 'key2')

// =>

// never是所有类型的子类型
type A = 'key1' | never = 'key1'

*/

// 本质上理解为他会依次比较前后每一位类型, 最后返回不同的