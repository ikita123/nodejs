const mysql=require("mysql");
const con=mysql.createConnection({
    user:"root",
    password:"Nikita@12345",
    host:"localhost"
})
con.connect(function(err){
    if(err) throw err;
    console.log("connected")
    con.query("CREATE DATABASE userdetailes  ",function(err,result){
        if(err) throw err;
        console.log("database created")
    })
})