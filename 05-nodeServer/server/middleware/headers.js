//1                         //2  1. module.exports allows us to export this file to another file. 2.req refers to the request from teh client, focusing on headers present in the request object. 
module.exports = function(req, res, next) {
    //3                     //4   3. calling res.header so the server will respond with what kind of headers are allowed in the request. 4. use 'access-control-allow-origin' header to tell the server the specific origin locations that are allowed to communicate with the server
 res.header('access-control-allow-origin', '*'); //'='*' is a wildcard, everythng is allowed, it's saying that requests originating from any location are allowed to communciate with the database.
 res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE'); //5 these are the http methods that the server will allow to be used.
 res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); //6 specific header types that the server will accept from the client
  
 next();   //7 next sends the request along to it's next destination
};