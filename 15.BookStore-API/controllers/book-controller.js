const Book=require('../models/book')


const getallBook = async (req, res) => {
    try {
        const allbook = await Book.find(); 
        if (allbook.length > 0) {
            res.status(200).json({
                message: 'List of all books',
                data: allbook
            });
        } else {
            res.status(404).json({ message: "No Books Found" }); 
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });
    }
};







const getSingleBookById = async (req, res) => {
    try {
        const bookId = req.params.id;
        const bookfind = await Book.findById(bookId); // ✅ Books → Book

        if (bookfind) {
            res.status(200).json({ // ✅ req.status → res.status
                message: "Book Found",
                data: bookfind
            });
        } else {
            res.status(404).json({
                message: "Book Not Found"
            });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });
    }
};







const addSingleBook= async (req,res)=>{
    try{
        const newbook=req.body;
        const newlyCreatedBook=await Book.create(newbook);
        if(newlyCreatedBook){
            res.status(201).json({
                Message: "New Book Added Sucessfully",
                data: newlyCreatedBook
            })
        }
        else{
            res.send("Somthing West Wrong");
        }

    }
    catch(err){
        console.log(err)
    }
     
}








const updateBook = async (req, res) => {
    try {
        const book_id = req.params.id;
        const updatedFormBookData = req.body;
        const updatedbook = await Book.findByIdAndUpdate(book_id, updatedFormBookData, {
            new: true // returns updated document instead of old one
        });

        if (updatedbook) {
            res.status(200).json({
                message: "Book Updated Successfully",
                data: updatedbook // ✅ updatedbook not updateBook
            });
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }

    } catch (err) {
        console.log(err); // ✅ log the actual error
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};








const deleteBook = async (req, res) => {
    try {
        const currentBookId = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(currentBookId); // ✅ findByIdAndDelete instead of deleteOne

        if (deletedBook) { // ✅ removed ! (if deleted successfully)
            res.status(200).json({
                message: "Book Deleted Successfully",
                data: deletedBook
            });
        } else {
            res.status(404).json({ message: "Book Not Found" }); // ✅ handle not found
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });
    }
};


module.exports = {getallBook,getSingleBookById,addSingleBook,updateBook,deleteBook}