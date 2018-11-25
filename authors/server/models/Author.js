let mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
    name:{type:String, required:true, minlength:2},
})

mongoose.model('Author',AuthorSchema);