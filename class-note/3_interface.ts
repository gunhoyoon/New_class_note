interface User { 
    age: number;
    name: string;
}
// 변수의 인터페이스 활용
var seho: User = {
    age: 33,
    name : '세호'
}
//  항상 동일한 규칙을 쓰겠다는 약속을 한거임


// 함수의 인터페이스 활용
function getUser(user: User) {
    console.log(user)
}
// User 인터페이스의 형식을 갖춘 것만 받겠다
const capt = {
    name: '캡틴',
    age: 100
}
getUser(capt);


// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
    return a + b
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr:StringArray = ['a', 'b', 'c']
arr[0] = "10"

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string] : RegExp
}
var obj: StringRegexDictionary = {
  // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
};
// obj['cssFile'] = 'a'

// 정의해놓은 interface 에 어긋남 RegExp가 할당이 되어야하는데 안돼서
// 일반 문자열을 넣어서 오류가 났다라는걸 interface 로 확인할 수 있다는걸 확인
Object.keys(obj).forEach(function (value) { })

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}
// Person 이 가진 속성을 상속받음(확장)
interface Developer extends Person{
    language: string;
}

var captain: Developer = {
    language: 'ts',
    name: '캡틴',
    age: 100
}
