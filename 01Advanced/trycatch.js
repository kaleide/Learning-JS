const convertToRs = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 64
    } else {
        throw Error('Amount needs to be in number')
    }
}

// const myValue = convertToRs ('5')
// console.log(myValue)
// (e) is the same ad (error)
try {
    const myValue = convertToRs(5)
    console.log(myValue);
} catch (e) {
    console.log(e);
}
console.log('I will not run if program crashes')
//  try and catch will allow program to continue running