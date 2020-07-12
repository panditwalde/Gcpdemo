const express=require('express');
const app=express();


app.get('/',function(req,res){

    res.status(200).send("hello form gcp");
});

var server=app.listen(8081,function(req,res){

    console.log(" server running");
    

});