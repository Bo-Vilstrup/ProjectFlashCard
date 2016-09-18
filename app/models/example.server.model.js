/**
 * Created by bo on 9/18/16.
 */
// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.Promise = global.Promise; // removes warning about promises




// Define a new 'ExampleSchema'
var FormSchema = new Schema({
    firstName : String,
    lastName : String,
    email : String,
    created : {type : Date, default : Date.now }
}, {collection : "form"}); // name of the collection in the database (not needed!)

mongoose.model("Form", FormSchema); // entity maneger




//
//
// // Load the module dependencies
// var mongoose = require('mongoose'),
//     Schema = mongoose.Schema;
//
// // Define a new 'ArticleSchema'
// var ArticleSchema = new Schema({
//     created: {
//         type: Date,
//         default: Date.now
//     },
//     title: {
//         type: String,
//         default: '',
//         trim: true,
//         required: 'Title cannot be blank'
//     },
//     content: {
//         type: String,
//         default: '',
//         trim: true
//     },
//     creator: {
//         type: Schema.ObjectId,
//         ref: 'User'
//     }
// });
//
// // Create the 'Article' model out of the 'ArticleSchema'
// mongoose.model('Article', ArticleSchema);