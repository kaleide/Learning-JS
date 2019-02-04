// const myElement = document.querySelector('.classone')
// console.log(myElement);

// const myPElement = document.querySelector('p')
// myPElement.textContent = 'I am being changed using JS'

const myPElement = document.querySelectorAll('p')
myPElement.forEach((p) => p.textContent = 'I am reformed by JS')

const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'
document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click', (event) =>
    event.target.textContent = 'I was clicked')
// track input form
document.querySelector('#myform').addEventListener('input', ()=>
    console.log(event.target.value) )