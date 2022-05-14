// type Includes<T extends readonly any[], U> = [P in T[number]];
// type Includes<T extends readonly any[], U> = T extends [infer X, ...infer Y] ? Equal<X, U> extends true ? true : Includes<Y, U> : false;

type MyEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

// 标准答案
type Includes<T extends readonly any[], U> = T extends [
    infer First, ...infer Rest
] ? MyEqual<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false

// 个人测试
// type Includes<T extends readonly any[], U> = T extends [
//     infer First, ...infer Rest
// ] ? First extends U
//     ? true
//     : Includes<Rest, U>
//   : false


// 知识点:
// 如果文件中没有使用import和export, ts会认为这是一个全局的文件, 其它文件可以不用导入就访问到该文件的类型

// 解题思路:
// 1. T extends [ infer First, ...infer Rest ]
//    等同于 [first, ...rest] = T, 主要目的是将数组解构, 并判断是否两侧是否相等
//      这里我理解当数组为空的时候, 该判断一定不为相等
// 2. MyEqual<First, U> extends true
//    借用他人实现的判断类型, 用来判断数组中的第一个元素与传入参数U是否相等
// 3. Includes<Rest, U>
//    如果不相等, 继续递归调用, 判断剩余数组(Rest)是否有参数相等
// 4. 全部都判断完, 走入最后一个false返回, 不相等