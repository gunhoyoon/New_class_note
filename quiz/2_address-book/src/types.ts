interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}
//
// findContactByPhone(phoneNumber:number, phoneType: string)
// 받을 폰 타입을 타이핑으로 쳐주는거보다 변수로 할당해서 갖다 쓰는게 타입 정의하는 쪽으로 더 안정적이므로
// enum 을 이용해서 정의를 해줄거임

enum PhoneType {
  home = "home",
  office = "Office",
  studio = "Studio",
}

export { Contact  , PhoneType};