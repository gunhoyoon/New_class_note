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

// findContactByPhone(phoneNumber:number, phoneType: string)
// 받을 폰 타입을 타이핑으로 쳐주는거보다 변수로 할당해서 갖다 쓰는게 타입 정의하는 쪽으로 더 안정적이므로
// enum 을 이용해서 정의를 해줄거임

enum PhoneType {
  home = 'home',
  office = 'Office',
  studio = 'Studio'
}

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

new AddressBook();
