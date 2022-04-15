type Length<T extends readonly any[]> = T["length"]

// tuple
// 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。