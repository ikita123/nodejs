var mysql=require("mysql");
var con=mysql.createConnection({
    user:"root",
    password:"Nikita@123",
    host:"localhost",
    database:"mynotebook"
})
con.connect(function(err){
    if(err) throw err;
    console.log("connected")
    var b ="INSERT INTO TABLE1(name,class) VALUES ('nikita','2')";
    var a=[["nikita","2"]]
    con.query(b,function(err,result){
        if(err) throw err;
        console.log("information insert")
    })
})
