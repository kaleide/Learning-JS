// const myTodo = ['Go Shopping', 'Hit Gym', 'Learn JavaScript']
// console.log(myTodo[myTodo.indexOf('Go Shopping')]);

const newTodo = [{
    title: 'Go Shopping',
    isDone: false,
}, {
    title: 'Hit Gym',
    isDone: false,
}, {
    title: 'Learn JavcaScript',
    isDone: true,
}]

// const index = newTodo.findIndex(function(todo, index){
//    console.log(todo);

//     return todo.title === 'Hit Gym'
// })
// console.log(index);


// Method 1
// const findTodo = function(myTodo, title){
//     const index = myTodo.findIndex(function(todo, index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodo[index]
// }

// let printMe = findTodo(newTodo, 'Hit GYM')
// console.log(printMe)

// Method 2
const findTodo = function(myTodo, title){
    const titleReturned = myTodo.find(function(todo, index){
        return todo.title.toLowerCase() == title.toLowerCase()
    })
    return titleReturned
}
let printMe = findTodo(newTodo, 'Hit GYM')
console.log(printMe)
