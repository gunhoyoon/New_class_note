// Async, Await

// async function fetchData() {
//     await getUserList();
// }

// 문법은 함수 앞에 async를 붙여주고 비동기 처리 로직 앞에 await 붙여줌
// Promise 객체를 반환하는 API 호출 함수 앞에 await 붙여줌

// 예전 비동기 처리 방식
function fetchData() {
    $.ajax('user/1', function (user) {
        console.log(user);
        $.ajax('users/2', "dd")
    });
    console.log(user)
}

// 최신 비동기 처리
async function fetchData() {
    var user = await $.ajax('users/1');
    console.log(user);
}

// 내부적인 코드 동작은 비동기처리지만 
// 비동기 사고를 할 필요가 없다
// 위 코드는 예제임 작동x