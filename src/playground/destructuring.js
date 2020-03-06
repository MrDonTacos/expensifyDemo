

// const person = {
//     name: 'Saul',
//     age: 21,
//     location: {
//         city: 'Mexicali',
//         temp: 54
//     }
// };

// const persona = {
//     name: 'fa',
//     age: 21,
//     location: {
//         city: 'Mexicali',
//         temp: 54
//     }
// };


// const {name, age, location} = person;
// const {namelocation} = persona;

// const {city, temp} = location


// console.log(`${namelocation} ${temp}.`);


//         Homework
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const {title, author, publisher} = book;
// const {name : name = 'Self-Published'} = publisher;

// console.log(`${title} ${author} ${name}`);

const direccion =['1299 S Juniper Street', 'Philadelphia', 'Mexico', 'Sl', '123456']

const [calle, state, country, mainCountry, zip] = direccion;

console.log(`${calle} ${state} ${country} ${mainCountry} ${zip} `);