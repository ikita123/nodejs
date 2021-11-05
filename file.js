
var fs = require("fs");

 fs.readFile('input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });

 var fs = require("fs");
  
// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

// TABLES:
// con.query("CREATE TABLE  TABLE1(name VARCHAR(5),Class VARCHAR(5))",function(err,result){
   // if(err) throw err;