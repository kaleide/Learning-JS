// && - AND operator - Both side need to be true to proceed
// || - OR operations - One side needs to be true to proceed

let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (isVerified && isLoggedIn && hasPaymentToken){
    console.log('Greeting message to user')
    console.log('Grant access to paid course')
} else if (isVerified || isGuest){
    console.log('Allow free previews')
} else {
    console.log('MESSAGE: Please contact admin')
}
