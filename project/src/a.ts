interface Hero {
  name: string;
  skill: string;
}

// const capt: Hero = {
//   name: 'capt',
//   skill: 'shield',
// };
// const capt: Hero = {};

const capt = {} as Hero;
// 타입 단언을 주의해서 사용해야함
// 모듈화가 되어있거나 분산되어있을 때
// 초기값이 정하지 않아서 당장 에러가 안남
// capt.name = 'capt';
// capt.skill = 'shield';

const a: string | null;
