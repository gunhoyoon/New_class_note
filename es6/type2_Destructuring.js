// Destructuring 구조분해 문법
function fetchData() {
    return {
        data: {
            name: 'capt',
            age: 100
        },
        config: {},
        statusText: '',
        headers: {}
    }
}

var result = fetchData();

console.log(result.data); 
// {name : "capt", age: 100}

var { data } = fetchDate();

console.log(data) // {name: "capt" , age: 100}

var { data: captain } = fetchData();
console.log(captain); // {name : "capt", age: 100}


