class Animal {
    declare private animalName;
    declare public name1: string;
}

class Dog extends Animal {
    declare private dogName;
    declare public name2: string;
}

type c = Animal & Dog   // 交叉类型, 类型c拥有两个class所有的属性
type d = Animal | Dog   // 联合类型, 类型未确定? 默认只会从中取得共有的部分 (name2取不到)
type e = unknown & Dog  // 可以取到dog中所有
type f = unknown | Dog  // 与unknown没有共有属性, 一个都取不到
type g = any | Dog  // any了, 任意值均可取到; q: 不太懂为什么any权重这么高
type h = any & Dog  // any了, 任意值均可取到
type i = unknown & any  // any
type j = unknown | any  // any


// class TestDog implements c {
//     private animalName: string;
//     private dogName: string
// }

let testA: Animal
let testC: c
// testC.name1, testC.name2
let testD: d
// testD.name1, testD.name2
let testE: e
// testE.name1, testE.name2
let testF: f
// testF.name1, testF.name2
let testG: g
// testG.name1, testG.name2, testG.name3
let testH: h
// testH.name1, testH.name2, testH.name3
let testI: i
// testI.name1, testI.name2, testI.name3
let testJ: j
// testJ.name1, testJ.name3