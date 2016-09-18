/**
 * Created by bo on 9/18/16.
 */
// Invoke 'strict' JavaScript mode
'use strict';
var express = require('express');
var router = express.Router();

require('../../app/models/example.server.model');


// Load the module dependencies
var mongoose = require('mongoose');
var Form = mongoose.model('Form');


// this file should be removed to at setup file
mongoose.connect('mongodb://localhost/cs5610'); // connects to ower mongo database cs5610


// Load the module dependencies
// var users = require('../../app/controllers/users.server.controller'),
//     articles = require('../../app/controllers/articles.server.controller');

router.get('/forms', function(req, res){
    
    // this is my controller object
    Form.find(function (err, data) {
        if(err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
}); // End of get all


router.get('/form/:id', function(req, res){

    var id = req.params.id;

    Form.findById(id, function(err, data) {
        if(err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
}); // End of get by id


router.delete('/form/:id', function (req, res) {

    var id = req.params.id;

    Form.remove({"_id" : id}, function (err, result) {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
}); // End of delete


router.post('/form', function (req, res) {

    var person = new Form(req.body);

    person.save(function (err, createdDocument) {
        if(err) {
            res.json(err);
        } else {
            res.json(createdDocument);
        }
    });
}); // End of post (save)


router.put('/form', function (req, res) {

    var id = req.body._id;
    var editPerson = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    };

    Form.findByIdAndUpdate(id, editPerson, { 'new': true},function(err, result) {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });

}); // End of put (edit)

module.exports = router;