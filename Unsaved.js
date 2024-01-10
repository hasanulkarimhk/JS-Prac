// const oneMap = new Map();

// oneMap.set("ai", 32);
// console.log(oneMap.get('ai'));
// // it prints 32 🙏

// const oneMap = new Map();

// oneMap.set("ai", 32);
// oneMap.set("bi", 3);
// oneMap.set("ci", 98);
// oneMap.set("di", 42);

// console.log(oneMap);
// //THis prints Map(4) { 'ai' => 32, 'bi' => 3, 'ci' => 98, 'di' => 42 }

// oneMap.set("ai", 32);
// oneMap.set("bi", 3);
// oneMap.set("ci", 98);
// oneMap.set("di", 42);

// oneMap.set("ai", 82);

// console.log(oneMap.get('ai'));

// //This prints 82


// oneMap.set("ai", 32);
// oneMap.set("bi", 3);
// oneMap.set("ci", 98);
// oneMap.set("di", 42);

// oneMap.set("Ai", 82);

// console.log(oneMap.get('ai'));

// // This prints 82


// oneMap.set("ai", 32);
// oneMap.set("bi", 3);
// oneMap.set("ci", 98);
// oneMap.set("di", 42);

// console.log(oneMap.size);

// // This prints 4

// const oneMap = new Map();

// oneMap.set("ai", 32);
// oneMap.set("bi", 3);
// oneMap.set("ci", 98);
// oneMap.set("di", 42);

// oneMap.delete('di');

// console.log(oneMap);

// // This prints Map(3) { 'ai' => 32, 'bi' => 3, 'ci' => 98 }

// const contacts = new Map();
// contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });

// console.log(contacts);

// Map(1) {
//     'Jessie' => { phone: '213-555-1234', address: '123 N 1st Ave' }
// }



// const myMap = new Map();

// const keyString = "a string";
// const keyObj = {};
// const keyFunc = function () { };

// // setting the values
// myMap.set(keyString, "value associated with 'a string'");
// myMap.set(keyObj, "value associated with keyObj");
// myMap.set(keyFunc, "value associated with keyFunc");

// console.log(myMap.size); // 3

// // getting the values
// console.log(myMap.get(keyString)); // "value associated with 'a string'"
// console.log(myMap.get(keyObj)); // "value associated with keyObj"
// console.log(myMap.get(keyFunc)); // "value associated with keyFunc"


// const first = new Map([
//     [1, "one"],
//     [2, "two"],
//     [3, "three"],
// ]);

// const second = new Map([
//     [1, "uno"],
//     [2, "dos"],
// ]);

// // Merge two maps. The last repeated key wins.
// // Spread syntax essentially converts a Map to an Array
// const merged = new Map([...first, ...second]);

// console.log(merged.get(1)); // uno
// console.log(merged.get(2)); // dos
// console.log(merged.get(3)); // three


// function past(h, m, s) {
//     return ((h * 3600) + (m * 60) + s) * 1000;
// }


// const myArray = ["Apple", "Banana", "Pineapple"];

// // console.log(myArray); // Prints [ 'Apple', 'Banana', 'Pineapple' ]
// // console.log(myArray[0]); // Prints Apple

// const newArray = myArray.join(", ");

// console.log(newArray);


// const myArray = [["Apple", "Banana", "Mango"],
// ["Ferrari", "Lambo", "Rolls"],
// ["Boeing", "Airbus", "beech-craft"]
// ];

// // console.log(myArray); // Prints the whole array

// const newArray = myArray.map(row => row.join('haha '));

// console.log(newArray);



// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map((x) => x * 2);

// console.log(map1);
// // Expected output: Array [2, 8, 18, 32] ✅



// const numbers = [1, 4, 9];
// const roots = numbers.map((num) => Math.sqrt(num));

// console.log(numbers); // Prints [ 1, 4, 9 ]
// console.log(roots); // Prints [ 1, 2, 3 ]



// const numbers = [1, 4, 9];
// const roots = numbers.map(() => Math.sqrt());

// console.log(roots); // Prints [ NaN, NaN, NaN ]

// const numbers = [1, 4, 9];
// const roots = numbers.map((anyhting) => Math.sqrt(anyhting)); // It targets all the elements in the array

// console.log(roots); // Prints [ 1, 2, 3 ]

// const kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { keyAnything: 3, value: 30 }, // It works this way but will show error if reformatted
// ];

// // console.log(kvArray);


// const kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
// ]

// const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

// console.log(reformattedArray);
// console.log(kvArray);
// // [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]
// // [ { key: 1, value: 10 }, { key: 2, value: 20 }, { key: 3, value: 30 } ]

// function boolToWord( bool ){
//     return bool ? 'Yes':'No';
//   }

// const num = 1;

// num ? console.log("Yes") : console.log("NO");