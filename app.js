var session = require('express-session');
var mysqlStore = require('express-mysql-session')(session);
var express = require('express');
var https = require('https');
var config = require('config');


var app = express();
app.use(express.static('views'));
app.set('view engine', 'ejs');

var sessionStore = new mysqlStore({
    host: 'localhost',
    user: config.get('db.username'),
    password: config.get('db.password'),
    database: config.get('db.database')
});

require('./lib/route.js')(app);

var host = '127.0.0.1';
var port = 5000;
if (config.has('host')) {
    host = config.get('host');
}

app.listen(port, function(){
  console.log('App listening at https://%s:%s with %s env', host, port, (!process.env.NODE_ENV ? 'dev':'prod'));
});


