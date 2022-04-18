// type MyAwaited<T> = T extends Promise<infer K> ? MyAwaited<K> : T;
type MyAwaited<T> = T extends Promise<infer K> ? MyAwaited<K> : T;

// 比较复杂:
// 1. infer 关键字: infer K 表示待推断的函数参数。
// 2. T extends Promise<>: 表示判断两者类型是否相同或者是寄生关系
// 3. 如果上述条件通过, 再次递归调用 MyAwaited<K>, 重复1 2 步骤, 直到认为跟Promise没有相同/继承关系, 返回类型T, 也就是Promise中参数