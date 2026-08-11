const exp=require('express')
const authorApp=exp.Router()
const UserAuthor=require('../MODELS/userAuthorModel')
const expressAsyncHandler=require("express-async-handler")
const createUserOrAuthor=require('../createUserOrAuthor')

//to get all authors
authorApp.get('/',expressAsyncHandler(async(req,res)=>{
  
}))

//create author
authorApp.post('/author',createUserOrAuthor)

module.exports=authorApp