enum Shoes {
  Nike = '나이키' ,
  // Nike에 10을 할당하고 Adidas에 값을 안주면 Adidas는 11이 됨
  Adidas = '아디다스'
}

// (enum member) Shoes.Nike = 0
// 별도의 값을 지정하지 않으면 전부 숫자형 enum으로 취급한다
var myShoes = Shoes.Nike
console.log(myShoes); // '나이키'

// enum 예제
enum Answer {
  Yes = "Y",
  No = "N",
}
// Answer라고 하는 enum 을 정의를 해놓음
function askQuestion(answer: Answer) {
  // 여기서 function askQuestion(answer: Answer) 라고 썼기때문에 
  // answer 로 들어온 파라미터의 값이 Answer 가 가진 두개의 데이터중 하나인지로 비교하게된다
  if (answer === Answer.Yes) {
    console.log("정답입니다");
  }
  if (answer === Answer.No) {
    console.log("오답입니다");
  }
}
askQuestion(Answer.Yes);
// askQuestion 라는 함수의 파라미터 값이 Answer 라고 하는 enum 이기때문에
// enum 에서 제공하는 값만 넘길 수 있음
// askQuestion('Yes') 그래서 이 호출은 안되는거임

// askQuestion('예스');
// askQuestion("y");
// askQuestion("Yes");
