require('dotenv').config();

const express=require('express');
const app=express();
const connectdb=require('./database/db')
const bookRoutes=require('./routes/book-routes');

const PORT=process.env.PORT || 3000;


//Connect to our database
connectdb()


//Middleware (Needs to be placed Before routes)
app.use(express.json());


// ROutes Here
app.use('/api/books',bookRoutes)





// Start the Server
app.listen(PORT,()=>{
    console.log("Server is running a port number ",PORT);
    
})
