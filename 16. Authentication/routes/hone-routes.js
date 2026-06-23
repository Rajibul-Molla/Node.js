const express=require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth-middleware')


//authMiddleware is a handler which used to verify then move next. you can use multiple handler

router.get('/welcome',authMiddleware, (req,res)=>{
    const {userName,userId,role}=req.userInfo;
    res.json({
        message:"Welcome to home page",
        user:{
            _id:userId,
            userName,
            role
        }
    })
});

module.exports = router