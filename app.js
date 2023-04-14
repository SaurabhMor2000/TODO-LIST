const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
let items =["Cleaning","Grocery"];
let worklist=["Software Testing","Operating System"];
app.get("/",function(req , res){
    let today = new Date();
   // var day = today.getDay();
    let option ={
        day :"numeric",
        month :"long",
        weekday :"long"
    };
    let  d= today.toLocaleDateString("hi-IN",option);

     res.render("list",{ D:d , newlistitems :items });
});
app.get("/collegework",function(req,res){
    res.render("list",{D :"collegework", newlistitems: worklist});
});
app.post("/",function(req,res){
    let item = req.body.newitems;
    if(req.body.list == "collegework"){
        worklist.push(item);
        res.redirect("/collegework");
    }
    else{
    items.push(item);
    res.redirect("/");}
});



   

app.listen(4000,function(){
    console.log("server started on port 4000");
});
