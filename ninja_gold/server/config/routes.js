var noob = require('./../controllers/tasks.js');
module.exports = function(app){
    app.get('/index', noob.index);
    app.post('/noob/:id', noob.farm);
    app.post('/cave/:id', noob.cave);
    app.post('/house/:id', noob.house);
    app.post('/casino/:id', noob.casino);
}