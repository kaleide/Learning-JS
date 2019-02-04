let sayHello = function (name) {
    console.log(`Greeting message for ${name}`);
    console.log(`Hey ${name}`);
    
}

// sayHello('John')


let fullNameMaker = function(firstname, lastname) {
    console.log('Welcome to LCO')
    console.log(`Happy to have you, ${firstname} ${lastname}`);

    
}

fullNameMaker('John', 'Doe')

let myAdder = function(num1, num2) {
    let added = num1 + num2
    return added
}
// you can use let result = myAdder(3, 5) and use result in log, 
// but its extra and messy
// console.log(myAdder(3, 5))

let myMultiplier = function(num1, num2) {
    return num1 * num2
    // let multiplier = num1 * num2
    // return multiplier
}
 console.log(myMultiplier(3, 5))

//  let guestUser = function(name, courseCount){
//     return 'Hello ' + name + ', your course count is: ' + courseCount
let guestUser = function(name = 'Unknown', courseCount = 0){
    return 'Hello ' + name + ', your course count is: ' + courseCount

 }
//  console.log(guestUser('John', 5))
//  console.log(guestUser())

