const mongoose=require('mongoose');

async function connectdb(){
    try{
        await mongoose.connect('mongodb+srv://rajibulat2_db_user:mUVaYquJw454gSXQ@cluster0.qqtcw0d.mongodb.net/Book-DB')
        console.log("Database Connected Sucessfully");
    }
    catch(err){
        console.log("Failed to Connect to db: ",err)
        process.exit(1);
    }
}

module.exports = connectdb;