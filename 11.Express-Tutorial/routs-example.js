const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send("Welcome to our Home Page");


})

app.get('/products',(req,res)=>{
    const products=[
        {
            id:1,
            name:"Biscuit"
        },
         {
            id:2,
            name:"Chocklet"
        },
         {
            id:3,
            name:"Rice"
        }
    ]
    res.json(products)
})


// Get a single products (DYNAMIC ROUTE)
app.get('/products/:id',(req,res)=>{
    console.log("Request Id ",req.params.id);


    const productId=parseInt(req.params.id);


        const products=[
        {
            id:1,
            name:"Biscuit"
        },
         {
            id:2,
            name:"Chocklet"
        },
         {
            id:3,
            name:"Rice"
        }
    ];
    const getsingleitem=products.find(product => product.id === productId)

    if(getsingleitem){
        res.json(getsingleitem)
    }else{
        res.status(404).send("Product is not Found");
    }
})


const port=3000;
app.listen(port,()=>{
    console.log("Server Is Running at Port Number 3000");

})