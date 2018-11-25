let mongoose = require('mongoose');
let Author = mongoose.model('Author');

module.exports = {
    allA: function(req,res){
        Author.find({},function(err,author){
            if(err){
                res.json(err);
            }else{
                res.json(author);
            }
        })
    },

    createA: function(req,res){
        Author.create(req.body, function(err,newA){
            if(err){
                res.json(err);
            }else{
                res.json(newA);
            }
        })
    },

    deleteA: function(req,res){
        Author.remove({_id:req.params.aId},function(err){
            Author.find({},function(err,author){
                if(err){
                    res.json(err);
                }else{
                    res.json(author);
                }
            })
        })
    },

    findA: function(req,res){
        Author.findOne({_id:req.params.aId}, function(err,author){
            if(err){
                res.json(err);
            }else{ 
                res.json(author);
            }
        })
    },

    updateA: function(req,res){
        Author.findOne({_id: req.params.aId}, function(err, author){
            author.name = req.body.name;
            author.save(function(err){
                if(err){
                    res.json(err);
                }else{
                    Author.findOne({_id: req.params.aId},function(err,author){
                        if(err){
                            console.log(err);
                        }else{
                            res.json(author);
                        }
                    })
                }
            });
        })
    },
}