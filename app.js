const mysql = require("mysql");
const express=require("express");

const app=express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"sampleDB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/",function(req,res){
    con.query("SELECT * FROM sampletable",function(error,rows,fields){
        if(!!error){
            console.log("error");
        }else{
            console.log("query successful");
            console.log(rows[0].name);
            res.send(rows[0].name);        }
    });
});

app.listen('3000',()=>{
    console.log("listening on port 3000");
})