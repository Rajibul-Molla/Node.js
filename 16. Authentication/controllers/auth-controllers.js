//import model
const Usermodel=require('../models/user')
const bcrypt=require('bcrypt')
const jwt=require ('jsonwebtoken')
require('dotenv').config();



//Register Controller
const registerUser = async (req,res)=>{

    try{
        //extract user infor from req body
        const {username,email,password,role}= req.body;

        //check if user already exist in our database
        const checkexistinguser = await Usermodel.findOne({$or: [{username},{email}]});
        if(checkexistinguser){
            return res.status(400).json({
                success: false,
                message: "User already exist with same username or email . please try with different"
            })
        }


        //hash user password
        const salt=await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt);


        // create a new user and save into the database
        const newlycreateduser = new Usermodel({
            username,
            email,
            password: hashedpassword,
            role : role || 'user'
        })
        await newlycreateduser.save()

        if(newlycreateduser){
            res.status(201).json({
                success: true,
                message: "User registeren sucessfully"
            })
        }
        else{
                res.status(400).json({
                success: false,
                message: "Unable to register please try again"
            })
        }









    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success: fslse,
            message: "Something Went Wrong",
        });
        
    }

}






//login controler
const loginUser = async (req,res)=>{

    try{
        const {username ,password}=req.body;


        //find if the current user exists in database or not
        const user= await Usermodel.findOne({username})

        if(!user){
            return res.status(400).json({
                sucess:false,
                message:"Cant find user on database"
            })
        }

        //if the password is correct or not
        const ispasswordmatch= await bcrypt.compare(password,user.password)

        if(!ispasswordmatch){
                return res.status(400).json({
                sucess:false,
                message:"Entered wrond password"
            })
        }

        //create user acess token
        const accessToken=jwt.sign({
            userId : user._id,
            userName : user.username,
            role : user.role
        },process.env.JWT_SECRET_KEY,{
            expiresIn: '15m'
        })

        res.status(200).json({
            sucess:true,
            message:'Logedin Sucessful',
            accessToken
        })


    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
        });
        
    }

}

module.exports = {registerUser,loginUser};
