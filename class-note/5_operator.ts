// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage("hello");
// logMessage(100); 

// function logMessage(value: string | number) {
//     console.log(value);
// }
// logMessage('hello')
// logMessage("100");
// (or)유니온 타입으로 문자열과 숫자 모두 받아서 사용할 수 있음

var seho: string | number | boolean;
function logMessage(value: string | number | boolean) {
    if (typeof value === 'number') {
        value.toLocaleString();
        // 타입확인을 해서 number라면 이기떄문에 number api 를 쓸 수 있다.
    }
    if (typeof value === "string") {
      value.toString();
      // 타입확인을 해서 string이라면 이기떄문에 string api 를 쓸 수 있다.
    }
    throw new TypeError('value mush be string or number')
    // 둘다 아닐 때 에러 메시지 던져줌
}
logMessage('hello')
logMessage(100)
logMessage(true)

interface Developer {
    name: string;
    skill : string
}
interface Person {
  name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
//     someone.name
    // 각각의 속성이 전부 찍힐거 같지만 그게 아니고 둘의 공통적인 속성인 name만 사용할 수 있다
    // 공통된 속성만 접근할 수 있다
}
askSomeone({ name: '디벨로퍼', skill: "웹 개발" });
// askSomeone({ name: '캡틴',age : 100 });
// function askSomeone(someone: Developer | Person): void
// 유니온 타입이기때문에 Developer & Person 객체 속성 전부를 넘기지 않아도 된다.

// 인터섹션 타입
// function askSomeone(someone: Developer & Person) {
//     someone.name;
//     someone.skill;
//     someone.age;
// }
// askSomeone({ name: '디벨로퍼', skill: "웹 개발", age:100 });
// 인터섹션 타입이기때문에 Developer & Person의 모든 속성을 다 합한 객체를 넘겨야한다.

// 인터섹션 타입에서의 someone은 Developer, Person이 가지고 있는 속성을
// 모두 포함했다고 보기때문에 접근이 바로 가능하다 

var capt: string & number & boolean;