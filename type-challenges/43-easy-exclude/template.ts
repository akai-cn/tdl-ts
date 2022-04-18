type MyExclude<T, U> = T extends U ? never : T

// Exclude 关键字源码:
// type Exclude<T, U> = T extends U ? never : T
// 如果 T 是 U 的子类型, 那就直接返回 never, 否则返回 T
// 意为直接过滤出 T 与 U 相比, T 自身独有的属性