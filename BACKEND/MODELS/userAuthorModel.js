const mongoose = require('mongoose')

const userAuthorSchema= new mongoose.Schema({
    role:
    {   
        required:true,
        type:String
    },
    firstName:{
        required:true,
        type:String
    },
    lastName:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    profileImageUrl:{
        type:String
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{"strict":"throw"}) //to throw error, in case of any validation mistakes

const userAuthorModel=mongoose.model('userauthor',userAuthorSchema)

module.exports=userAuthorModel