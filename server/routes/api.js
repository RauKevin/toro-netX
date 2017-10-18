const express = require ('express');
const router = express.Router();
const User = require('../models/user');

/* Need to get rid of all the NINJA stuff */

// get a list of ninjas from the db
router.post('/login', function(req, res, next){
    //res.send({type: 'GET'});
    console.log('Log in request received @'+Date.now);
    User.findOne({'email':req.body.email}).then(function(user){
        let log = '';
        if(user == null)
        {
            log += 'User does not exist, please register new user';
            res.send({err:log});
        }
        //check password
        if(req.body.password === user.password)
        {
            console.log('User log in successful');
            res.send(user);
        }
        else{
            log += 'incorrect user name and password';
            res.send({err:log});
        }
    
    }).catch(next);
});

// add a new ninja to the db
/*
router.get('/login', function(req, res, next){
    User.findOne({'email':req.body.email}).then(function(user){
        if(user == null)
        {
            console.log('User does not exist');
        }
        res.send(user);
    }).catch(next);
});
*/

// add a new ninja to the db
router.post('/register', function(req, res, next){
    //check is user email exist
    User.findOne({'email':req.body.email}).then(function(user){
        if(user == null)
        {
            console.log('Creating user');
            User.create(req.body).then(function(user){
                console.log('New user added to the database');
                res.send(user);
            }).catch(next);
        }
        else{
            let s = "user with email: "+ req.body.email +" already exist"; 
            res.send({err:s});
        }        
    }).catch(next);

   
});

// update a ninja in the db
router.put('/login/:id', function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    }).catch(next);
});

// delete a ninja from the db
router.delete('/login/:id', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

module.exports = router;