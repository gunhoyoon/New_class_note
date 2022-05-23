// 타입 호환
interface Developer {
    name: string
    skill: string
}
// interface Person {
//     name: string
// }
class Person {
    name: string;
    
}
// 타입 호환은 속성과 타입들의 대해서 적용을 하는거임
// interface class 이런걸로 따지는게 아님 내부적으로 비교하는거임
var developer: Developer;
var person: Person;
developer = person // 오른쪽에 있는 타입이 왼쪽을 할당이 될 수 있냐? 할때 에러가 나옴
// 오른쪽에 있는 타입이 구조적으로 왼쪽에 있는 타입보다 더 컸을 때 호환이 되냐를 비교하는거임

// 함수 호환성
var add = function (a : number) {
    // ...
}
var sum = function (a: number, b: number) {
    // ...
}
// 기본적으로 sum 이라는 함수가 add 보다 더 큰 함수임
// add = sum; 이건 안되고
// sum = add 이건 됨

// 제네릭 호환성
interface Empty<T> {
   // .. 
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;
// 얘는 어떤 속성자체가 없기때문에
// 그때그때 넣는 속성으로 비교하게 되니까 당연히 같다고만 나옴

interface NotEmpty<T> {
    data: T;
}
let x: NotEmpty<string>
let y: NotEmpty<number>
// x = y; // 에러

// 제네릭 타입이 data에 할당이 되었으므로 
// string = number 처럼 비교하는거랑 같은꼴임
// 그러니까 에러 나옴