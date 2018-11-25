var mongoose = require('mongoose');
var Noob = mongoose.model('Noob');

module.exports = {

    index: function (req,res) {
        Noob.find({}, function(err, noobs){
            if (err) {
                console.log("WTF", err)
            } else {
                Noob.create(req.body, function (err, noobs){
                    if (err) {
                        console.log("error....", err);
                    } else {
                        res.json(noobs)
                    }
                })
            }
        })
    },

    farm: function (req,res) {
        Noob.findOne({_id: req.params.id}, function (err, noobs){
            noobs.gold += Math.floor(Math.random()* 5 + 2);
            noobs.save(function(err){
                if (err) {
                    console.log("error..", err);
                } else {
                    res.json(noobs)
                }
            })
        })
    },
    cave: function (req,res) {
        Noob.findOne({_id: req.params.id}, function (err, noobs){
            noobs.gold += Math.floor(Math.random()* 6 + 5);
            noobs.save(function(err){
                if (err) {
                    console.log("ERROR", err);
                } else {
                    res.json(noobs)
                }
            })
        })
    },
    house: function (req,res) {
        Noob.findOne({_id: req.params.id}, function (err, noobs){
            noobs.gold += Math.floor(Math.random()* 9 + 7);
            noobs.save(function(err){
                if (err) {
                    console.log("ERROR", err);
                } else {
                    res.json(noobs)
                }
            })
        })
    },
    casino: function (req,res) {
        Noob.findOne({_id: req.params.id}, function (err, noobs){
            noobs.gold += Math.floor(Math.random()* 201 - 100);
            noobs.save(function(err){
                if (err) {
                    console.log("ERROR", err);
                } else {
                    res.json(noobs)
                }
            })
        })
    },
}