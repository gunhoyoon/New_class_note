// 타입 단언(type assertion)
var a; // any 추론
a = 20;
a = 'a'
var b = a as string; // b = string
// var b = a as string; a as string 으로 인해서 b를 string의 타입으로 만듦
// 타입 단언 =
//     타입을 정의할때 타입스크립트가 관여하지 않고 개발자가 직접 정한 타입으로 간주를 하라고 하는것

// DOM API 조작
// <div id= "app" > hi < /div>

var div = document.querySelector("div");
if (div) {
    div.innerText
}
// div라는 태그가 없을수도 있기때문에 보장을 해준다는 코드
// 현업에선 이렇게 쓰는 경우가 더 많음