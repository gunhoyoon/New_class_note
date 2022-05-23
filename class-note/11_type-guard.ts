interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: "Tony", age: 33, skill: "Iron Making"}
}

var tony = introduce();
// console.log(tony.skill);

// introduce에 
// Developer | Person {
//     return { name: "Tony", age: 33, skill: "Iron Making"}
// }
// 할당해주고 그걸 tony 라는 변수에 담았는데
// console.log(tony.skill); 접근 자체가 안됨

// 그 이유는 유니온 타입은 공통적인 속성만 접근할 수 있어서임

// 그걸 해결하기 위해서 타입 단언을 사용해서 속성에 접근할 수 있음
// 조건문 안에 토니 as Developer.skill 이다. 개발자가 직접 정해주는대로 사용.
// 그리고 그 안에서도 한번 더 단언을 해줘서 사용하는데 
// 이건 너무 가독성이 떨어지기때문에 여기서 타입 가드를 이용함 
if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill
    console.log(skill)
} else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age)
}

// 타입가드 소개
// 타입가드는 기본적으로 is 라는 패턴을 많이 사용험
// is 의 사용은 이게 맞냐? 라는 의미기때문에 타입인지 먼저 걸러내려고 사용

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}
// 넘겨받은 파라미터 target이 developer 인지를 확인하는거 
// 내부 로직에서 타켓이 developer라고 가정하고 스킬이 있다면 . undefined가 아니라면
// 인자로 넘겼던 값이 타입은 developer 다. 라고 알려주는거임

// 타입 가드를 이용한 타입 정의 방식 
if (isDeveloper(tony)) {
    console.log(tony.skill)
}   else { 
    console.log(tony.age);
}
// isDeveloper(tony) = 토니가 developer냐?
// 맞다면 developer 만 가지고 있는 skill 속성을 제공해주고
// 아니라면 person 일태니까 age 를 제공해준다 
//  30번째 줄부터 시작하는 코드랑 비교했을때 엄청 줄어들었고 가독성도 훨씬 좋아짐