const exp=require('express')
const userApp=exp.Router()
const UserAuthor=require('../MODELS/userAuthorModel')
const expressAsyncHandler=require("express-async-handler")
const createUserOrAuthor=require('../createUserOrAuthor')

userApp.get('/',expressAsyncHandler(async(req,res)=>{
    try
    {
    const users= await UserAuthor.find({})
    res.send({message:"users, authors fetched", payload:users})
    }
    catch(e)
    {
        res.send(`error occured: ${e.message}`)
    }
}))

//create a user
userApp.post('/user',createUserOrAuthor)

module.exports=userApp