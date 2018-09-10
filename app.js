var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

app.use(express.static(path.join(__dirname,'static/js')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride());

app.get('/', function(request, response, next){
    response.sendFile(path.join(__dirname,"static/home.html"));
});

app.get('/dashboard', function(request, response, next){
    response.sendFile(path.join(__dirname,"static/dashboard.html"));
});

app.get('/child', function(request, response, next){
    response.sendFile(path.join(__dirname,"static/threejs.html"));
});

app.get('/parent', function(request, response, next){
    response.sendFile(path.join(__dirname,"static/parent.html"));
});


app.listen(3000)
