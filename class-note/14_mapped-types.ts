type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HeroAges = { [K in Heroes]: number }
// in 을 써서 Heroes를 순회하면서 Hulk:number , Capt: number, Thor: number 가 되고
// 그걸 HeroAges에 넣어준거임 그러니까 HeroAges를 쓸땐 
// Hulk:number , Capt: number, Thor: number 에 맞게 각각 정의를 해줘야됨
// 기존 타입을 맵드 타입으로 새로운 타입으로 변환해내는거 마치 맵 함수를 도는거 처럼.
// 반복되는 타입을 유틸리티 타입으로
const ages: HeroAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000,
}
