const express=require('express');
const path=require('path');

const app=express();

// set view engine to ejs
app.set('view engine','ejs');

// Set the directory for the views
app.set('views',path.join(__dirname, 'views'));

const products = [
    {
        id:1,
        name:"Product 1 "
    },
        {
        id:2,
        name:"Product 2 "
    },
        {
        id:3,
        name:"Product 3 "
    }
]


app.get('/',(req,res)=>{
    // res.send("Welcome Home");
    // res.send(products);

    res.render('home',{name: 'Home', products: products});


})

app.get('/about',(req,res)=>{
    res.render('about',{name:'About Page'})
    
})
app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})