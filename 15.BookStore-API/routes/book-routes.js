const express=require('express');
const {getallBook,getSingleBookById,addSingleBook,updateBook,deleteBook}=require('../controllers/book-controller')

// Create express router
const router = express.Router();

// All the routes that are releted to books only
router.get('/get',getallBook);
router.get('/get/:id',getSingleBookById );
router.post('/add', addSingleBook);
router.put('/update/:id',updateBook);
router.delete('/delete/:id', deleteBook);



module.exports = router;