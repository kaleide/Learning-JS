var john = {
    name: 'I am john',
    age: 24,
    isActive: true,

}

var mary = {
    name:'I am mary',
    age: 23,
    isActive: true
}

var sam = {
    name:'I am sam',
    age: 40,
    isActive: false
}

let users = new Map()

users.set('john', john)
users.set('mary', mary)
users.set('sam', sam)

// console.log(users.size);

// console.log(users.get('sam'));

// console.log(users.keys());
// console.log(users.values());

// for (const key of users.keys()) {
//     console.log(key);
// }
//  for (const [key, value] of users.entries()) {
//  console.log(`${key} ${value.name}`)
//  }
// //  convert to literals

// users.forEach((value, key) => {
//     console.log(`${key} ${value.name}`)
// });

var arrOfArr = [['one', '1'], ['two', '2'], ['three', '3']]

var newMap = new Map(arrOfArr)

console.log(newMap)
