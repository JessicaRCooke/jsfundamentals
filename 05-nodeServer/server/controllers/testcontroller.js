var express = require('express') //1
var router = express.Router() //2
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test'); //1
 /****
  * Controller Method #1: Simple Response
  */
    //1          //2   
  router.post('/one', function(req, res) {
      //3
      res.send("Got a post request")
  });

  /***
   * Controller Method #2: Persisiting Data
   */

   router.post('/two', function(req, res) {
       let testData = "Test data for endpoint two"; //2

       TestModel //3
       .create({  //4
            //6
           testdata: testData  //5

       }).then(dataFromDatabase => {
           res.send("Test two went through!")
       })
   });

   /***
    * Controller Method #3: req.body
    */

    router.post('/three', function(req, res) {

        var testData = req.body.testdata.item;

        TestModel
        .create({
            testdata: testData
        })
        res.send("Test three went Through!")
        console.log("Test three went through!")
    });

    //STEP 4 - use this with Postman

    router.post('/four', function(req, res) {
        var testData = req.body.testdata.item;

        TestModel
        .create({
            testdata: testData
        })
        .then( //1
            function message() {  //2
            res.send("Test 4 went through!");
        }
        )
    })

    /* Route 5: Return Data in a Promise   */

    router.post('/five', function (req, res) {
        var testData = req.body.testdata.item;
        TestModel 
        .create({
            testdata: testData
    })
        .then(
            function message(data) {
            res.send(data);
            }
        );    
 });

 /*****
  * Route 6: Return response ad JSON
  */

  router.post('/six', function(req,res) {
      var testData = req.body.testdata.item;
      TestModel
      .create({
        testdata: testData
     })
     .then(
         function message(testdata) {
             res.json({
                 testdata: testdata
             });      
         }
     );
  });

  /*****
   * Route 7: Handle errors
   */

   router.post('/seven', function (req, res) {
       var testData = req.body.testdata.item;

       TestModel
       .create({
           testdata: testData
       })
       .then(
           function createSuccess(testdata) {
               res.json({
                   testdata: testdata
               });
           },
           function createError(err) {
               res.send(500, err.message);
           }
       );
   })
 /***
  * GET: Get simple message from server
  */
   router.get('/helloclient', function(req, res) {
       res.send('This is a message from the server to the client.')
   })

   /***
    * GET: /one
    */

    router.get('/one', function(req,res) {

        TestModel
        .findAll({  // attributes for two of the columns. This is part of sequelize. you can choose which columns you grab from
            attributes: ['id', 'testdata']
        })
        .then(
            function findAllSuccess(data) {
                console.log("Controller Data:", data);
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
    })
module.exports = router;



