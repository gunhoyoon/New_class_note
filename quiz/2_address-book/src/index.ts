import {Contact , PhoneType} from './types'  
  
  // api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts():Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts:Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
   return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts:Contact[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData():void {
    fetchContacts().then(response => {
      // response의 타입이 Contact[]인데 그 이유가  
      // fetchContacts 함수가 : Promise의 벨류 타입이 Contact[] 라고 명시를 해서
      // then 을 했을때 promise가 명시해준 타입이 온거임(response)에
      this.contacts = response;
      // 그리고 그 타입이 contacts로 들어감
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name:string):Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address:string):Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  findContactByPhone(phoneNumber:number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }
  

  addContact(contact:Contact):void {
    this.contacts.push(contact);
  }
  // 반환값이 없을때 void

  displayListByName() {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress() {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

// let div = document.querySelector("div")
// if (div) {
//   div.innerText
// }
// div가 있다면의 조건으로 한번 타입을 확인해줌

let div = document.querySelector("container") as HTMLDivElement;
  div.innerText;
// 타입 단언으로 타입을 정해두면 if 거치지않고 바로 사용 가능   


new AddressBook();
