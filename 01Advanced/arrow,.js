// const sayHello = function(name){
//     return "Hey there, " + name + " !"
// }
// console.log(sayHello('Sammy'))

// const sayHello = (name) => `Hey there ${name} !`

// console.log(sayHello('Sammy'))

// const todos = [{
//     title: 'Go Shop',
//     isDone: true
// }, {
//     title: 'Hit Gym',
//     isDone: false
// }, {
//     title: 'Learn JS',
//     isDone: true
// }]

// Not clean no arrow style
// const thingsDone = todos.filter((todos) => {
//     return todos.isDone === true
// })

// clean arrow style
// const thingsDone = todos.filter((todo) => todo.isDone === true)
// console.log(thingsDone)

// 6 elements, 3 true 3 false, notDone function filter only notDone title:

const todos = [
    {title: 'Go Shop', notDone: true}, 
    {title: 'Hit Gym', notDone: false}, 
    {title: 'Learn JS', notDone: true}, 
    {title: 'Get Better', notDone: false}, 
    {title: 'Take Meds', notDone: false}, 
    {title: 'Practice JS', notDone: true},]
// this is good, can be made better?
// const todoDone = todos.filter(function(todos){
//     if (todos.notDone === false){console.log(todos.title)}
// })

const todoDone = todos.filter((todos) => {if (todos.notDone === true) {console.log(todos.title)}})
// goofy .foreach stuff 
// const notDone = (todos.filter((todos) => todos.isDone === false)).forEach((todos) => {console.log(todos.title)})

// const cameras = {
//     price: 600,
//     weight: 2000, 
//     myDes: function() {
//         return `This cannon camera is of ${this.price}$`
//     }

// }
// console.log(cameras.myDes())

// this is only for Redux
// const func = () => ({key: 'value'})
