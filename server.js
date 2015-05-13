var express = require('express'),
	app = require('./app');

var server = app.listen(3000, function (){
	console.log('App listening on port 3000');
});