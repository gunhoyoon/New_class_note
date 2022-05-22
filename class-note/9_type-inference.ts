// 타입 추론 기본 1
// var a; // any
var a = 10; // number

function getB(b = 10) {
    var c = "hi"
    return b;
}
// 함수에서 별다른 타입을 넣어주지 않았을 때 파라미터에 들어오는 타입을 타입으로 받음

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
// Dropdown에  string 을 넘겼기때문에
// value : string / title : string 이 된다.
var shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
    // 제네릭의 값을 타입스크립트 내부적으로 추론을 해서 변수의 타입까지 보장해줌
}

// 타입 추론 기본 3 
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;     
    tag: K;
}
// interface DetailedDropdown<K> extends Dropdown<K> 을 쓰게 되면
// 기존 DetailedDropdown 가 가지고 있는거 + extends Dropdown<K> 를 통해서 들어온
// description: string;
// tag: K;
// value: T;
// title: string;

var detaileditem: DetailedDropdown<string> = {
    title: ' abc',
    description: 'ab',
    value: 'a',
    tag: 'a'
}

// var detaileditem: DetailedDropdown<number>; 에서 받은 number 가

// interface DetailedDropdown<K> extends Dropdown<K>
// interface DetailedDropdown<K> K 로 들어가고
// extends Dropdown<K> 로 들어가서    
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
// value: T 까지 들어가게됨



// Best Common Type(가장 적절한 타입)

var arr = [1, 2, true, true, "d"];

// arr의 타입을 구분하기 위해서 각각 살펴보는데
// 이때 Best Common Type 알고리즘으로 가장 근접한 타입을 추론하는게
// Best Common Type 임 모든 타입을 유니온을 묶어나감