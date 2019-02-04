function myValidation(){
    let myValue = document.getElementById('myform').value;

    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        let myValue = document.getElementById('idone');
        myValue.replaceWith('Not a valid input')
    } else {
    
        console.log('This input is ok');
    }
}
// Form validation
document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log(event.target.verifyPass.value)
    event.target.username.value = '';
    event.target.email.value = '';
    event.target.password.value = '';
    event.target.verifyPass.value = '';

    
})

// username email password password === password