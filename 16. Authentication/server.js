const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); 

const express=require('express');
require('dotenv').config();
const connectDB= require('./Database/db');

const authRoutes = require('./routes/auth-routs')
const homeRoutes = require('./routes/hone-routes')
const adminRoutes = require('./routes/admin-routes')



const app=express();
const PORT=process.env.PORT || 3000;

//middlewares
app.use(express.json())

//Database Connection
connectDB();


//routher
app.use('/api/auth',authRoutes);
app.use('/api/home',homeRoutes)
app.use('/api/admin',adminRoutes)



app.get('/',(req,res)=>{
    res.send("Hello, Welcome Home")
})





app.listen(PORT,()=>{
    console.log(`Server is Running at Port number ${PORT}`)
})










