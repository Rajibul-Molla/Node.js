const express = require('express');
const app=express();

const custom_middleware = (req,res,next)=>{
    const timestamp=new Date().toISOString();

    console.log(`${timestamp} from ${req.method} with URL ${req.url} `);
    next();
}

app.use(custom_middleware);
app.get('/',(req,res)=>{
    res.send("This is home Page");

})

app.get('/about',(req,res)=>{
    res.send("This is about page");

})

app.listen(3000,()=>{
    console.log("Server is Running")
})