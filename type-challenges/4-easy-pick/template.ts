// T: 泛型
// K: 的值是一个联合类型 union; 表现形式 'title' | 'completed' 就是取并集
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
}

// keyof 的作用将一个 类型 映射为它 所有成员名称的联合类型
// 举例:
/**
    interface Todo {
        title: string
        description: string
        completed: boolean
    }
    keyof Todo 等价于 type Todo = 'title' | 'completed' | 'description'
 */

// in 关键字, 遍历;
// [P in K] 从K中遍历出变量P
// 举例:
/**
    还是以上面 interface Todo 举例:
    type Test = {
        [P in Todo]: any
    }
    等价于
    type Test = {
        title: any
        description: any
        completed: any
    }
 */

// T[P] 从参数T中取出key为(P)的值