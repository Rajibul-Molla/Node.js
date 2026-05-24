const express=require('express');
const app=express();

//middleware 
app.use(express.json());

let books=[
    {
        id:1,
        title:"Book 1"
    },
        {
        id:2,
        title:"Book 2"
    }
]

// Get main route

app.get('/',(req,res)=>{
    res.json({
        message : "Welcome to our Book API"
    })
})

//Get all Books
app.get('/get',(req,res)=>{
    res.json(books);
})


//Get a single Book
app.get('/get/:id',(req,res)=>{
    const singleitem=parseInt(req.params.id);
    const book=books.find(item => item.id === singleitem)

    if(book){
        res.status(200).json(book)
    }else{
        res.status(404).json({
            message: "Book not found"
        });
    }
})


// Add a new book to books
app.post('/get/add',(req,res)=>{
    const newBook={
        id : books.length + 1,
        title: `Book ${books.length +1}`
    }

    books.push(newBook);
    res.status(200).json({
        Data : newBook,
        Message: "New Book added sucessfully"
    })
})



//Update a book
app.put('/get/update/:id',(req,res)=>{
    const currentbook=books.find(item => item.id===parseInt(req.params.id))
    if(currentbook){
        currentbook.title=req.body.title || currentbook.title;


        res.status(200).json({
            message: "Book Updated Sucessfully",
            data: currentbook
        })
    }
    else{
        res.status(404).json({
            Message: " Book Not Found"
        })
    }

})



// Delete a book
app.delete('/delete/:id',(req,res)=>{
    const delete_index = books.findIndex (item => item.id === parseInt(req.params.id));
    if(delete_index !== -1){
        const deleted_book=books.splice(delete_index,1);
        res.status(200).json({
            Message: "Book Deleted Sucessfully",
            data: deleted_book[0]
        })
    }
    else{
        res.status(404).json({
            Message: "Book Cant find"
        })
    }
})




const port=3000;
app.listen(port,()=>{
    console.log("Server is running at port 3000")
})