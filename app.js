var express = require('express');
var mysql = require('mysql');
var bodyParser  = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

require('dotenv').config();

app.use(express.static("public/stylesheets"));

var connection = mysql.createConnection({
    host        : process.env.HOST,
    user        : process.env.USER, // your root username
    database    : process.env.DATABASE, // the name of your db (create this if you haven't already)
    password    : process.env.PASSWORD // your root user's password
});



app.get("/", function(req, res){
    // Find and count al the users in the DB
    
    var q = 'SELECT icm FROM users ORDER BY user_id DESC LIMIT 1;';
    connection.query(q, function(error, results){
        if (error) throw error;
        var imc = results[0].icm;
        res.render("home", {data: imc});
    });
});

app.post("/calculate", function(req, res){
    var user = {
        name: req.body.name,
        age: req.body.age,
        weight: req.body.weight,
        high: req.body.high,
        gender: req.body.gender
    }
    //var cal_imc = (user.weight / user.high);
    connection.query('INSERT INTO users SET ?', user, function(err, results){
        if (err) throw err;
        res.redirect("/");
    });
});


app.get("/table", function(req, res){
    var q = 'SELECT * FROM users;';
    connection.query(q, function(error, rows){
    if (error) throw err;
    res.render("data", {data: rows});
    });
});




/* var q = 'SELECT * FROM users;';

connection.query(q, function (error, rows) {
    if (error) throw error;
    console.log(rows);
});
 */


app.listen(8080, function(){
    console.log("Server is runing on PORT 8080");
});