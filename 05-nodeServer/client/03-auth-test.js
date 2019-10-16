function fetchAllFromAuthRoute() {
    const fetch_url = `http://localhost:3000/authtest/getall`
    const accessToken = localStorage.getItem('SessionToken')  //can access the token in localStorage with the getItem method, could also use our getSessionToken() method.

    const response = fetch(fetch_url, {
        method: 'GET', // by default fetch runs a 'GET' request. we can use teh method property to send other requests.
        headers: {
            'Content-Type': 'application/json', // tells the server what kind of data is being sent in our PreFlight request
            'Authorization': accessToken   // 'Authorization' header proveds some sort of encrypted data allowing access to the server, it is the token in this case
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {

            console.log(data)
        })
}

/******
 * FETCH/POST to Auth/Create
 */

function postToAuthRouteCreate() {
    const fetch_url = `http://localhost:3000/authtest/create`
    const accessToken = localStorage.getItem('SessionToken')

    let authTestDataInput = document.getElementById('authTestData').value;

    let authInputData = { authtestdata: { item: authTestDataInput } };

    const response = fetch(fetch_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData)
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
}

/****
 * GET ITEM BY USER
 *****/

function getOneByUser () {
    let postIdNumber = document.getElementById("getNumber").value; // get the postIdNumber provided in the getNumber field. Because we are making an authenticated request
                                                                        //this id has to exist in the database and match the user.id from the database for the user logged in
    const fetch_url = `http://localhost:3000/authtest/${postIdNumber}` //pass the postIDNumber into the url with a template literal
    const accessToken = localStorage.getItem('SessionToken')
    console.log(accessToken)
    const response = fetch(fetch_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
        .then(response => {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            var myItem = document.getElementById('getItemValue');  //target an element called 'getItemValue' it is a label tag 
            myItem.innerHTML = response.authtestdata;  //set the value of the lable to the value of 'response.authtestdata', this means the data will be populated in the label when the dom loads
        })
}

/******
 * PUT to authtest/update/:id
 */

 function updateItem() {
     let postIdNumber = document.getElementById('updateNumber').value;
     let authTestDataInput = document.getElementById('updateValue').value;

     const fetch_url = `http://localhost:3000/authtest/update/${postIdNumber}`
     const accessToken = localStorage.getItem('SessionToken')

     let authInputData = { authtestdata: {item: authTestDataInput } };
     const response = fetch(fetch_url, {
         method: 'PUT',
         headers: {
             'Content-Type': 'application/json',
             'Authorization': accessToken
         },
         body: JSON.stringify(authInputData)
     })
     .then(response => {
         return response.json();
     })
     .then(data => {
         console.log(data)
         var myItem = document.getElementById('newItemValue')
         myItem.innerHTML = data.authtestdata;
         fetchAllFromAuthRoute();
     })

 }

 function showCurrentData(e) {
     const fetch_url = `http://localhost:3000/authtest/${e.vaule}`
     const accessToken = localStorage.getItem('SessionToken')

     fetch(fetch_url, {
         method: 'GET',
         headers: {
             'Content-Type': 'application/json',
             'Authorization': accessToken
         }
     })
     .then(response => {
         return response.json();
     })
     .then(function (response) {
         console.log(response);
         var myItem = document.getElementById('updateValue');
         if (!response) return;
         else myItem.value = response.authtestdata;
     })
 }

 function deleteItem() {
     let postIdNumber = document.getElementById("deleteNumber").value;

     const fetch_url = `http://localhost:3000/authtest/delete/${postIdNumber}`
     const accessToken = localStorage.getItem('SessionToken')

     const response = fetch(fetch_url, {
         method: 'DELETE',
         headers: {
             'Content-Type': 'application/json',
             'Authorization': accessToken
         }
     })
        .then(response => {
            console.log(response);
            fetchAllFromAuthRoute()
        })
 }

 function deleteItemById(paramNum) {
     const fetch_url = `http://localhost:3000/authtest/delete/${paramNum}`
     const accessToken = localStorage.getItem('SessionToken')

     const response = fetch(fetch_url, {
         method: 'DELETE',
         headers: {
             'Content-Type': 'application/json',
             'Authorization': accessToken
         }
     })
     .then(response => {
         console.log(response);
         fetchAllFromAuthRoute();
     })
 }

 function fetchFromOneDisplayData() {
     const url = 'http://localhost:3000/authtest/getall';
     const accessToken = localStorage.getItem('SessionToken')

     fetch(url, {
         method: 'GET',
         headers: new Headers({
             'Content-Type': 'application/json',
             'Authorization': accessToken
         })
     }).then(
         function (response) {
             return response.json()
         })
         .catch(
             function (error) {
                 console.error('Error:' , error)
             })
         .then(
             function (response) {
                 let text = '';
                 var myList = document.querySelector('ul#fourteen');
                 while (myList.firstChild) {
                     myList.removeChild(myList.firstChild)
                 }
                 console.log(response);
                 for (r of response) {
                     var listItem = document.createElement('li');
                     var textData = r.id + ' ' + r.authtestdata;
                     listItem.innerHTML = textData;
                     listItem.setAttribute('id', r.id);
                     myList.appendChild(listItem);
                     myList.addEventListener('click', removeItem);
                 }
             })    
            }
             function removeItem(e) {
                 console.log(e);
                 var target = e.target;
                 if (target.tagName !== 'LI') return;
                 else target.parentNode.removeChild(target);

                 let x = target.getAttribute("id")
                 deleteItemById(x);
                 //console.log("The id numberfor this item is " + x);
             }