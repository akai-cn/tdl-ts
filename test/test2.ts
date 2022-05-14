type Test2 = {
    name: string
}

interface ITest2 {
    age: string
}

interface ITest2_1 extends Test2 {}

type Test2_1 = Test2 & ITest2


let test2_1: ITest2_1
test2_1.name

let test2_11: Test2_1
test2_11.age, test2_11.name