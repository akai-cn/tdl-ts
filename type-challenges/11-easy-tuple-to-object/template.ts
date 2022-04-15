type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}

// keyof -> array = 获取到数据的索引
// 遍历数组需要使用 T[number] 写法, 不要问为什么, 问就是设计