const isAdminuser=(req,res,next)=>{
    if(req.userInfo.role !== 'admin'){
        return res.status(500).json({
            sucess:false,
            message:"You are not authorize to visit the page"
        })
    }
    next()
}
module.exports=isAdminuser;