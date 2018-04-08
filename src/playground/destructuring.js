/* OBject Destructuring */

// const person = {
//     name: 'Lahm',
//     age: 24,
//     location: {
//         city: 'Austin',
//         temp: 80
//     }
// };
//
// const {name: firstname = 'Anonymous', age} = person;
// console.log(`${firstname} is ${age}.`);
//
// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);

/* Array Destructuring */
const address = ['1299 S Jupiter Street', 'Philadelphia', 'Pennsylvania', '19417'];
const [,, state = 'New York'] = address;
console.log(`You are in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , price2] = item;
console.log(`A medium ${coffee} costs ${price2}`);
