var path = require('path');


module.exports = function (app) {

  //GET route to form page 
  app.get('/form', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/views/form.html'));
  });

  //USE that leads to index.html showing the hom page 
  app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
  });

};