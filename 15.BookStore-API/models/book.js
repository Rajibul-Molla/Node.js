// Schema design for mongo

const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    title : {
        type: String,
        required : [true,"Book title is Required !"],
        trim : true,
        maxLength : [100,'Length cant extend 100 character! ']
    },
    author : {
        type: String,
        required : [true,"Author is Required !"],
        trim : true,
        maxLength : [100,'Length cant extend 100 character! ']
    },
year: {

    type: Number,

    required: [true, 'Publication year is required'],

    min: [1000, 'Year must be at least 1000'],

    max: [
        new Date().getFullYear(),
        'Year cannot be in the future'
    ]
},

createdAt: {

    type: Date,

    default: Date.now
}
})

module.exports = mongoose.model("Book", bookSchema);



