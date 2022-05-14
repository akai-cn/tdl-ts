interface Animal1 {
    age: number
}

interface Dog1 extends Animal1 {
    bark(): void
}

let animal: Animal1 = { age: 12 };
let dog: Dog1 = {
    age: 12,
    bark: () => {}
}

animal = dog    // 兼容, 能赋值成功, 这就是一个协变
// dog = animal    // 不兼容, 缺少属性 bark():void


let visitAnimal = (animal: Animal1): Dog1 => {
    animal.age;

    return {
      age: 12,
      bark() {}
    }
}

let visitDog = (dog: Dog1): Animal1 => {
    dog.age;
    dog.bark();

    return {
      age: 20
    }
}

// 兼容
visitDog = visitAnimal

// 不兼容, 会抛出类型错误
// visitAnimal = visitDog

// 函数参数是逆变: Animal1 -> Dog1, 父类型 -> 子类型
// 函数返回值是协变: Dog -> Animal, 子类型 -> 父类型
// 可以想象成下面类型
/**
interface Fn {
    params: any[];  // 逆变
    return: any;    // 协变
}
 */
// https://github.com/sl1673495/blogs/issues/54