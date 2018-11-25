let a = require('../controllers/author.js');
var path = require('path');

module.exports = function(app){
    app.get('/index', a.allA);
    app.get('/findA/:aId', a.findA);

    app.post('/createA', a.createA);

    app.put('/updateA/:aId', a.updateA);

    app.delete('/deleteA/:aId', a.deleteA);
    
    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
        });
}