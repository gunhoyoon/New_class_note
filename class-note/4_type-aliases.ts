// interface Person {
//     name: string;
//     age: number;
// }
// interface 를 이용한 타입정의
// interface 는 extents 로 확장이 가능 
// 가능하면 interface 로 선언해서 사용하는 것이 좋음
type Person = {
    name: string;
    age: number;
}
// type 별칭을 이용한 type 정의 
// type은 확장이 되지않음
var seho: Person = {
    name: '세호',
    age: 30    
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean }
function getTodo(todo: Todo) {
    
}
//type Todo = { id: string; title: string; done: boolean } 을 활용해서
// 가독성을 높임 