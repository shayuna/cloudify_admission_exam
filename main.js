const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");
const fs=require("fs");
const app=express();

app.use(express.static(path.resolve(__dirname,"public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get ("/nodes",function(req,res,next){

    fs.readFile(path.resolve(__dirname,"public","serializedNodes.txt"), function (err, data) {
        if (err) {
          throw err; 
        }
        res.json(JSON.parse(data.toString()));
    });

/*
const jExample=[
    {id:1,name:"my node1",pid:2},
    {id:2,name:"my node2",pid:null},
    {id:3,name:"my node3",pid:2},
    {id:4,name:"my node4",pid:null},
    {id:55,name:"my node55",pid:4},
    {id:67,name:"my node67",pid:4},
    {id:10,name:"my node10",pid:4},
    {id:11,name:"my node11",pid:10},
    {id:7,name:"my node7",pid:null},
];
res.json(jExample);
*/
});

app.post("/nodes",function(req,res,next){
//    console.log ("got it -"+req.body.serializedNodes);
    fs.writeFile(path.resolve(__dirname,"public","serializedNodes.txt"),req.body.serializedNodes, function(err) {
        if(err) {
            res.sendStatus(500); 
        }
    });
    res.sendStatus(200); 
});

app.get("",function(req,res,next){
    res.sendFile(path.resolve(__dirname,"public","main.htm"));
})

app.listen(8080);