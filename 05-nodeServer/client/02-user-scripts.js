/******
 * POST -/ createuser
 */

function userSignUp(){
    let userName = document.getElementById('userSignUp').value; //grab value of the user/password data from the create user input field in the index.html file
    let userPass = document.getElementById('passSignUp').value;
    console.log(userName, userPass);

    let newUserData = {user : {username: userName, password: userPass}}; //the variables used to store the sign up info from the DOM get passed into the values of the username and password properties. We package evertthhing in a user object.
    fetch('http://localhost:3000/api/user/createuser', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)  //in the request object in our fetch() call we pass in the newUserData variable to be sent off in the body of our request to the server
    })
    .then(response => response.json())
    .then(function (response) {
        console.log(response.sessionToken);
        let token = response.sessionToken;  //get the sessionToken from the response and store it in the 'token' variable
        localStorage.setItem('SessionToken', token); // in localStorage we call setItem function and store the token in localStorage, this will keep our token stored safely in our local window
    });
}

function userSignIn() {
    let userName = document.getElementById('userSignin').value;
    let userPass = document.getElementById('passSignin').value;
    console.log(userName, userPass);

    let userData = {user : { username: userName, password: userPass}};
    fetch('http://localhost:3000/api/user/signin', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(function (response) {
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
    });
}

/*****
 * Helper function for token
 */
function getSessionToken() {
    var data = localStorage.getItem('SessionToken');
    console.log(data);
    return data;
}