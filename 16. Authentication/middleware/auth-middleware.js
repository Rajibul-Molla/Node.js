const jwt= require('jsonwebtoken')

const authMiddleware = (req,res,next)=>{

    const authHeader= req.headers["authorization"]
    console.log(authHeader)

    const token = authHeader && authHeader.split(" ")[1];


    if(!token){
        return res.status(401).json({
            sucess:false,
            message:"Acess denied . no token provided. please login to continue"
        })
    }



    //Decode the token
    try{
        const decodeToken=jwt.verify(token,process.env.JWT_SECRET_KEY)
        console.log(decodeToken)

        req.userInfo = decodeToken


        
    next()

    }
    catch(error){
        return res.status(500).json({
            sucess:false,
            message:"Acess denied . no token provided. please login to continue"
        })
    }





}
module.exports = authMiddleware;