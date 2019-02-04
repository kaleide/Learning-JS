// const giveType = typeof {}
// console.log(giveType)
// true = 1, flase = 0
// const adder = 5 + true - false
// console.log(adder)
// ------------ never left JS figure it out for you -------
const loginDetail = []
// login for getting details.from DB

const loginID = loginDetail[0]

if(loginDetail) {
    console.log('Allow user to login');
} else {
    console.log('Auth failed');
}

// Values that interpret as false:
// false, 0, '', null, undefined
// EVERYTHING else is true
