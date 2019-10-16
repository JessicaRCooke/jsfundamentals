var express = require('express') 
var router = express.Router()     //1
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var jwt = require('jsonwebtoken');
var bcryptjs = require('bcryptjs');
/*****
 * Create User Endpoint: Starter
 */
 //2
router.post('/createuser', function(req, res) {

    var username = req.body.user.username;
    var pass = req.body.user.password;    /**3**/

    User.create({
        username: username,
        passwordhash: bcryptjs.hashSync(pass, 10)

    }).then(
        function createSuccess(user) {
            
          var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});  
            res.json({
                user: user,
                message: 'created',
                sessionToken: token //6
        });
        },
        function createError(err) {
            res.send(500, err.message);
        } 
    );       
});

router.post('/signin', function(req,res) {

    User.findOne( {where: { username: req.body.user.username }})
    .then(function(user) {

        if(user) {

            bcryptjs.compare(req.body.user.password, user.passwordhash, function (err, matches){ 

                if (matches) {

                    var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24 });
                    res.json({
                        user: user,
                        message: "successfully authenticated",
                        sessionToken: token
                    });
                }else{
                    res.status(502).send({ error: "you failed, yo: "});
                }
                console.log("the value matches:", matches)
            })
        } else {
            res.status(500).send({ error: "failed to authernitcate"});
        }
     },
      function (err) {
          res.status(501).send({ error: "you failed, yo" });
      }
    );
});
module.exports = router;