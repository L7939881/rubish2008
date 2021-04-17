const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
console.log(bodyParser);
const mysql = require("mysql");
const  app=express();
const  port=8080;

//  创建连接
const connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "123456789",
    database : "2008"
})
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// 跨域问题
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });




app.get("/", (req,res) => {
    // 得到get请求的参数 使用query
    console.log(req.query);
    res.send("hello world dfasd");
});


app.post("/userlogin",function(req,res){
     user_name = req.body.user_name;      //接收的用户名
     user_password = req.body.user_password;
    // const sql = `select * from p_users where user_name='${user_name}' and user_password='${user_password}';

    console.log(user_name);
    console.log(user_password);
})


 app.listen((port),()=>{
    console.log(`http://localhost:${port}`)
 })