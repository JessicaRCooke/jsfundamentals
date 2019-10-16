function fetchHelloDataFromAPI() {
    fetch('http://localhost:3000/test/helloclient', { //1 test endpoint with fixed value to verify server works
        method:'GET',
        headers: new Headers({          //2 send our headers to the server with the 'headers()' constructor object.
            'Content-Type': 'application/json'
        })
    })
    .then(function (response) {
        console.log("Fetch response:", response)
        return response.text();  //3 the value received in a string not a JSON so 'text()' is used isntead of json()
    })
    .then(function (text) {
        console.log(text);
    })
}
/******
 * 2 POST long hand: /one
 */

 function postToOne() {
     var url = 'http://localhost:3000/test/one';

     fetch(url, { //1. fetching url, method is post
         method: 'POST',
         headers: new Headers({
             'Content-Type': 'application/json'
         })  
     }).then(
         function(response) {   //pass the response from the post into a promise that returns plain text
             return response.text()
         })
         .catch(
             function(error) {  //error handling
                 console.error('Error:', error)
             })
        .then(
            function(response) { //print the plain text response in the console
                console.log('Success:', response);
            })          
 }
 /*****
  * 3 POST/one: Arrow Function
  */

  function postToOneArrow() {
      var url = 'http://localhost:3000/test/one';

      fetch(url, {  
          method: 'POST',
          headers: new Headers({
              'Content-Type': 'application/json' 
          })
      }).then(res => res.text())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  function postData() {

    let content = { testdata: { item: 'This was saved!'} }; //1 setting up an object: preset string as the value of the item property

    let testDataAfterFetch = document.getElementById('test-data');
    let createdAtAfterFetch = document.getElementById('created-at');

    fetch('http://localhost:3000/test/seven', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    })
    .then(response => response.json())
    .then(function (text) {
        console.log(text);

        testDataAfterFetch.innerHTML = text.testdata.testdata;
        createdAtAfterFetch.innerHTML = text.testdata.createdAt;
    })
  }
 /****
  * GET FROM /ONE - Display Data
  */
function fetchFromOneDisplayData() {

    let url = 'http://localhost:3000/test/one'; // set up URL and target the data-one id from the DOM
    let dataView = document.getElementById('dispaly-one');

    fetch(url, {  // create a fetch() with headers, use the GET method, handle errors
        method: 'GET',
        heders: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        function(response){
            return response.json()
        })
        .catch(
            function(error) {
                console.error("Error:", error)
            })
       .then(
           function(results) {    //targets the 'getjson id in the DOM and attaches the value to the 'myList' variable
               let myList = document.querySelector('#getjson');

               for (r of results) { //sets up a for loop
                   console.log('Response:', r.testdata); // console log to show how we can access the values that come back in the response
                   var listItem = document.createElement('li');   // create a variable called 'listItem', the createElement() method will create the element in the dom. the for of loop creates one every iteration
                   listItem.innerHTML = r.testdata; //each iteration stores the value 'r.testdata' in the newly created li
                   myList.appendChild(listItem); // call appendChild myList, each iteration puts the li into the unordered list
               }
        })     
}