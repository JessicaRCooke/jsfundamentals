var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var AuthTestModel = sequelize.import('../models/authtest');

/***
 * GET ALL ITEMS FOR INDIVIDUAL USER
 * ******** */

router.get('/getall', function (req, res) {
     var userid = req.user.id;

     AuthTestModel
        .findAll({
            where: { owner: userid }
        })
        .then( 
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
 });

 /****
  * POST SINGLE ITEM FOR INDIVIDUAL USER
  */

router.post('/create', function (req, res) {
    var owner = req.user.id;
    var authTestData = req.body.authtestdata.item;

    AuthTestModel
        .create({
            authtestdata: authTestData,
            owner: owner
        })
        .then(
            function createSuccess(authtestdata) {
                res.json({
                    authtestdata: authtestdata
                });
            },
            function createError(err) {
                res.send(500, err.message);
            }
        );
});

/****
 * GET SINGLE ITEM FOR INDIVIDUAL USER
 */

 router.get('/:id', function(req, res) {
     var data = req.params.id;
     var userid = req.user.id;

     AuthTestModel
        .findOne({
            where: { id: data, owner: userid}
       }).then(
           function findOneSuccess(data) {
               res.json(data);
           },
           function findOneError(err) {
               res.send(500, err.message);
           }
       );
 });

 /***
  * DELETE ITEM FOR INDIVDUAL USER
  */

  router.delete('/delete/:id', function(req, res) { // the delete request is received and the controller looks for a matching funciton. then we sepecify what we are doing in the end point so the user knows
      var data = req.params.id; //paramater passed to the url
      var userid = req.user.id; //userid set when vaidate session is called

      AuthTestModel
      .destroy({ //Sequelize method used to remove an item from a database
          where: { id: data, owner: userid } //telling sequelize what to look for in trying to find an item to delete
      }).then(
          function deleteLogSuccess(data) {
              res.send("you removed a log"); //callback function response sent when the delete is successful
          },
          function deleteLogError(err){ // callback function response sent when the delet is unsuccessful
              res.send(500, err.message);
          }
      );
  });
/****
 * update item for indiviual user
 */

 router.put('/update/:id', function(req, res) { //http verb 'put' replaces whatever is already there with what we give it. PUT means update. We use update in our route to make things easier
     var data = req.params.id; //the paramater taken from the URL
     var authtestdata = req.body.authtestdata.item; //the data we want to put into the database, replacing what is there

     AuthTestModel
        .update({ //Sequelize method which takes two arguements
            authtestdata: authtestdata //6 first arguement of update. Contains an object holding the new value we want in the database
        },
        {where: {id: data}} //second arguement of update. tells sequelize where to place the new data
        ).then(
            function updateSuccess(updatedLog) { //callback function runs if update is successful and returns the data entered
                res.json({
                    authtestdata: authtestdata
                });
            },
            function updateError(err) { // callback function that runs if the update is unsuccessful and returns the error message
                res.send(500, err.message);
            }
        )
 });

 module.exports = router;