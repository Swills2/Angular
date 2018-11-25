var mongoose = require('mongoose');
var NoobSchema = new mongoose.Schema({
    gold:{type: Number, default: 0},
}, {timestamps:true});

mongoose.model('Noob', NoobSchema);
module.exports = mongoose.model('Noob', NoobSchema);
