const express = require("express");
const cors = require('cors');

const iphone=require('./routes/iphone');
const ipad=require('./routes/ipad');
const home=require('./routes/home');
const macbook=require('./routes/macbook');
const accesories=require('./routes/accesories');

const app=express();

app.use(cors());
app.use("/",home);
app.use("/",iphone);
app.use("/",ipad);
app.use("/",macbook);
app.use("/",accesories);

app.listen(5060,function(){
    console.log("server is running at port 5060")
})