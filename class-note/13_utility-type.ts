interface Product {
    id: number,
    name: string,
    price: number,
    brand: string, 
    stock: number;
}


// 상품 목록을 받아오기 위한 api 함수
function fetchProducts():Promise<Product[]> {
    
}

// function displayProductDetail(shoppingItem:
//     { id: number; name: string; price: number }) {
// }
// 이 코드처럼 Product interface 에 들어있는 속성을 다 쓰는게 아니고 일부만 쓰는 경우가 있는데,

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// function displayProductDetail(shoppingItem: ProductDetail) {
// }

// 그 속성을 interface에 또 정의해도 되지만 그렇게 되면 중복코드가 늘어남

// 이때 Product에 정의된 속성을 뽑아서 사용할 수 있음 (Pick) = 유틸리티 타입중 하나임
type ShoppingItem = Pick<Product, "id" | "name" | "price">;
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {
    // 기존 타입을 변환해서 사용한거임 Pick을 이용해서
    // 불 필요한 코드 반복을 줄이고 깔끔함
}
    

// Omit 타입 > 얘도 유틸리티 탙입중 하나임
// Pick은 기존 타입에서 지정해서 그것만 사용하는건데
//  Omit 타입은 기존 타입에서 지정한것만 빼고 나머지 타입을 적용해줌
// const omit사용방법: Omit<기존타입, "뺴고싶은 속성" | "뺴고싶은 속성"> = {
//     빼고 남은속성: "dd"
//     빼고 남은속성: 1010
// }


// 특정 상품 정보를 업데이트(갱신) 하는 함수 <Partial>
type UpdateProduct = Partial<Product> // 이렇게 사용한다면 위에 정의된 Product가 옵셔널하게 바뀜
// type UpdateProduct = {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }; 와 같다. 이렇게 쓰면 중복 코드가 늘어나기때문에 Partial 을 쓰는거임

function UpdateProductItem(ProductItem: Partial<Product>) {
  //  Partial<Product> 을 하게되면 Product가 옵셔널하게 바뀌니까 그 안에 속성을 써도 되고 안써도 됨
}


// ****** 유틸리티 타입 구현 - Partial ******

interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }
// 이렇게 옵셔널로 다시 써주면 코드가 늘어나서 별로 그래서 이제 순차적으로 줄이는 코드가 나옴

// // 1. 첫번째 접근하는 방식
// type UserProfileUpdate = {
//   username?: UserProfile["username"];
//   email?: UserProfile["email"];
//   profilePhotoUrl?: UserProfile["profilePhotoUrl"];
// };
// UseProfile 이라는 interface 를 들고와서 각 속성에 접근해서
// UserProfileUpdate 기본 속성들을 옵셔널 처리 해주면 위 구조와 같아짐   


// 2. 두번째 접근하는 방식(맨드 타입) 타입을 줄여나갈 수 있음

// type UserProfileUpdate = {
//   [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
  // in 을 타고 안에 속성들을 반복문처럼 돈다고 보면 됨 그렇게 되면
  // UserProfile의 속성들중 하나가 p에 들어옴
  // 전체적으로 ?(옵셔널) 하게 해주면 됨
// };
// 위의 또 UserProfile의 key가 전부 유니온 타입으로 되어있음.

// keyof로
// type UserProfileKeys = keyof UserProfile


// 3. 세번째 줄이는거
// 여기까지는 UserProfile에 국한되는 타입임
// 이거보다 좀 더 많은 정의된 타입들의 옵셔널한 타입을 정의하고 싶으면
// UserProfile에 자리에 타입을 넘겨받을 수 있는 형태<T> 제네릭을 사용하면 됨
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};


// 4. 네번째
type Subset<T> = {
  [p in keyof T]?: T[p]
  // T는 이미 정의되어있는 다른 타입들임 위 예제에선 UserProfile이 되는거고 같은 구조의 다른것들 전부
  // keyof 를 통해 T안에 있는 속성들을 다 들고 와서
  // in을 통해 그 속성을 반복문 처럼 돌고 // 이렇게 in으로 반복문처럼 도는걸 맵드 타입이라고 함
  // 그 속성을 p에 넣어주면서 사용
  // 반환값에 옵셔널도 들어가있음 (?)
  // 이 구조가 결국 타입스크립트가 정의하고 있는 Partial임
}