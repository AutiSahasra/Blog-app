const exp=require('express')
const userApp=exp.Router()
const UserAuthor=require('../MODELS/userAuthorModel')
const expressAsyncHandler=require("express-async-handler")
const createUserOrAuthor=require('../createUserOrAuthor')
const Article =require('../MODELS/articleModel')

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
//to add comment
userApp.put('/comment/:id',expressAsyncHandler(async(req,res)=>{
    const updatedArt=await Article.findByIdAndUpdate(req.params.id,{$push:{comments:req.body}},{new:true})
    res.status(200).send({message:"Comment posted!",payload:updatedArt})
}))

//create a user
userApp.post('/user',createUserOrAuthor)

module.exports=userApp