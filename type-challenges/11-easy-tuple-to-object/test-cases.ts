import { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// as const 断言
// 个人理解
// 1. 如果不加 as const, 直接 typof tuple 转换成ts类型, ts会转换成一个 string[] 类型
// 原因: 因为原有的 const tuple, 虽然是一个const类型, 但是其指向的是一个数组, 数组是可以随意改变其中内容的, 所以将其转换成 string[]是可以理解的
// 2. 加上 as const, 会将数组以及其所有元素转换为固定值

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
]

type error = TupleToObject<[[1, 2], {}]>
