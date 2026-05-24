const express = require('express')
const app = express()
const port = 3000

// Application level settings
app.set('view engine','ejs');

//routing
app.get('/',(req,res)=>{
    res.send("Home page")
})

app.post('/api/data',(req,res)=>{
    res.json({
        message: "Data Received",
        data: req.body
    })
})


app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send("Somthing Went Wrong");
})

















app.listen(port,()=>{
    console.log("Server is runnig at port number 3000");
})