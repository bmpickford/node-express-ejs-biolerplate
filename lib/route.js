module.exports = function(app) {
  
  app.get('/', function(request, response) {
    response.redirect('/home');
  });
  app.get('/home', function(request, response) {
    response.render('home.ejs');
  });
  
}
