// function fetchItems():string[] {
//     var items = ["a", "b", "c"];
//     return items;
// }
// var result = fetchItems()
// console.log(result)
// result 타입이 string이 된다.


// function fetchItems(): Promise<string[]> 여기서
// Promise<string[]> 이기 때문에 받는 인자의 타입이 문자열 스트링이어야 한다는거임
// <number[]> 집어넣고 items가 string[] 이라면 당연히 오류나옴

function fetchItems(): Promise<string[]> {
    let items: string[] = ["a", "b", "c"];
    return new Promise(function (resolve) {
        resolve(items)
    });
}
fetchItems();


// 현재 패치아이템즈라는 함수를 실행하는 시점에서
// 타입스크립트가 프로미스 안에 들어오는 비동기코드들에 대해서 알 수 없음 그래서 promise 타입이 unknown임
// new를 했을 때 반환 타입이 Promise<T>가 되어야한다고 정의되어있음 promise에
// promise 가 기본적으로  <T> 제네릭으로 정의되어있다고 알 수 있음
// 정의를 따로 안해주면 unknown 이라고 나옴


