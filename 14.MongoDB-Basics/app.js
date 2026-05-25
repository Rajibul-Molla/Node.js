const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://rajibulat2_db_user:Cf2cjQ5JjBTyJqYN@cluster0.diqbjvi.mongodb.net/').then(()=>{
    console.log("Database Connected Sucessfully")
}).catch((err)=>{
    console.log("Error: ",err)
})

//Define Database Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: {type: Date , default: Date.now}
});


//Create a User Model (Collection create)
const User=mongoose.model('User',userSchema);

async function runQueryExample(){
    try{

        //Remove Before Pushing
        //{

            // Create a new Document/User
            // const newUser=await User.create({
            //     name: "Kushal Bera",
            //     email: "kushalbwera@gmail.com",
            //     age: 28,
            //     isActive: false,
            //     tags: ['Developer', 'Engineer'],
            // })
       // }


        // Alternate Way to create User
        //     const newUser=new User({
        //     name: "Rajibul Molla",
        //     email: "rajibulat@gmail.com",
        //     age: 77181149790,
        //     isActive: true,
        //     tags: ['Developer', 'Engineer'],
        // })
        // await newUser.save()


        // console.log("Created new user",newUser)







        //Get all user from database
        // const allUser= await User.find();
        // console.log(allUser);





        //FInd one user based on condition
        // const OneUser=await User.findOne({isActive: false})
        // console.log(OneUser)




        //Get last created User
        // const getlastcreateduserbyid= await User.findById(newUser._id)
        // console.log(getlastcreateduserbyid)






            //Get a user by specific Id
            // const specificUser=await User.findById('6a14432eee2dcb311b50c174')
            // console.log(specificUser);






            //Print some specific fields to get 
            // const customfield=await User.findOne({name:"Rajibul Molla"},{name:1 , email:1,_id:0})
            // console.log(customfield)
                // OR
                // const customfield = await User.findOne({ name: "Rajibul Molla" }).select("name email -_id");
                //  console.log(customfield)
           


            //Limit Skip Property
            // const limitedUsers = await User.find().limit(5).skip(1);
            // console.log(limiterUsers)






            
        // Find all users and sort them by age in descending order
        // const sortedUsers = await User.find().sort({ age: -1 });
        // console.log(sortedUsers);



        // Count How Many results You are getting 

        const doccount=await User.countDocuments({isActive: false})
        console.log(doccount)




    }









    catch(err){

        console.log("Error: ",err)
    }
    finally{
        await mongoose.connection.close();
        console.log("Database connection Closed")
    }
}

runQueryExample();