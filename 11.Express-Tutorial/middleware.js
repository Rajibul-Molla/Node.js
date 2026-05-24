const express=require('express')
const app=express();


  let count=1;
const myfirstmiddleware = (req,res,next)=>{
  
    console.log("Middleware is always running current count : ",count)
    count++;

    next();
};

app.use(myfirstmiddleware);

app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.get('/about',(req,res)=>{
    res.send("This is about page ")
})

app.listen(3000,()=>{
    console.log("Our app server is running at port number 3000")
})