// datatype - Array

// const superHeroes = ['Iron man', 'Spiderman', 'Captain America', 'Thor']

// console.log(superHeroes);
// console.log(superHeroes[0]);
// console.log(superHeroes[2]);
// console.log(superHeroes[superHeroes.length -1]);

// console.log(`We have ${superHeroes.length} super heroes`);


const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

// numbers[1] = 'SOMETHING'

// console.log(numbers);

// Start

// console.log(numbers.shift())
// console.log(numbers);

// numbers.unshift('SOMETHING')
// console.log(numbers)

// End

// console.log("The element to be deleted is: " + numbers.pop())
// console.log(numbers);

// numbers.push('Seven')
// console.log(numbers);

// Middle

numbers.splice(2, 1, 'SOMETHING')
console.log(numbers)

numbers.splice(2, 3, 'SOMETHING')
console.log(numbers)

