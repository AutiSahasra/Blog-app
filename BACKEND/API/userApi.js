const exp=require('express')
const userApp=exp.Router()
const UserAuthor=require('../MODELS/userAuthorModel')
const expressAsyncHandler=require("express-async-handler")

userApp.get('/users',expressAsyncHandler(async(req,res)=>{
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

module.exports=userApp