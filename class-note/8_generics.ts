// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); // 숫자 10
// logText("하이"); // 문자열 하이
// logText(true); // 진위값 true

// function logText<T>(text: T): T {
//     console.log(text)
//     return text;
// }
// logText<string>('하이')
//  logText 에 인자를 넘길건데 그 인자의 타입이 string이다.
// 라고 명시적으로 제네릭으로 직접 넘김 (기본적인 문법임)
// 호출하는 시점에 타입이 정해지는거임


//   function logText(text: string) {
//       console.log(text);
//     //   text.split('').reverse().join('');
//       return text;
//   }

function lognum(num: number) {
  console.log(num);
  return num;
}
  // logtext 와 lognum은 내부 로직은 똑같지만
  // 단순 타입을 바꾸기 위해 같은걸 여러번 사용했을 때 유지보수 등 단점이 생김
logText("a")
// 타입을 정의하지 않았을 땐 암묵적으로 any 가 들어가있기때문에 다 가능
// 기존의 타입정의 방식처럼 text: string 으로 타입을 정해줬을 땐 string만 사용가능


// 그럼 기존 타입스크립트 문법에서 사용하던게 하나의 한타입이라 불편하다면 유니온 타입으로 사용하면 되지 않느냐 했을때
// 유니온 타입을 이용한 선언 방식의 문제점

//   function logText(text: string | number) {
//     console.log(text);
//     return text;
//   }

// const a = logText('a');
// logText(10);

// text를 유니온 타입으로 string 과 number 를 넣어줘서
// 인풋값에는 문제가 없는데 반환할때 a의 타입이 string | number 가 되기때문에
// string 또는 number 에서 제공하는 Api를 사용할 수 없다.
// 온전히 string 일때만 사용이 가능하기 때문에

// 제네릭의 장점 , 타입 추론에서의 이점은 ?
   function logText<T>(text:T): T {
     console.log(text);
     return text;
   }

const str = logText<string>('a')
str.split('')
// logText<string>('a') = string 타입을 str 에 할당함
// 그래서 str.split('') 사용이 가능해짐  
const login = logText<boolean>(true);

// 제네릭을 이용해 타입 정의에 이점이 확실하게 생김

// 인터페이스에 제네릭을 선언하는 방법

// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = {
//   value: "10",
//   selected: false
// }

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const obj: Dropdown<Number> = {
  value: 10,
  selected: false,
};

// 인터페이스에 제네릭을 활용하므로 안의 속성의 타입을 얼마든지 바꿀 수 있음