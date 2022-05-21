// 타입스크립트의 클래스 문법
class Person {
    name: string;
    age: number;
    // 타입스크립트에선 속성의 타입을 지정해준 후에 쓸 수 있음
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

// 리액트 예전 문법 - 클래스 기반 코드
class App extends React.Component {

}


// 리액트 최신 문법 - 훅 기반의 함수형 코드
function App() {
    return <div>Hello World</div>
}

//
new Vue({
    el: '',
    setup() {
        
    }
})