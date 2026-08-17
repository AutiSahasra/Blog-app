const exp=require('express')
const authorApp=exp.Router()
const UserAuthor=require('../MODELS/userAuthorModel')
const expressAsyncHandler=require("express-async-handler")
const createUserOrAuthor=require('../createUserOrAuthor')
const Articles=require('../MODELS/articleModel')

//create author
authorApp.post('/author',createUserOrAuthor)

//to post an article
authorApp.post('/article',expressAsyncHandler(async(req,res)=>{
    //get details
    const articleObj=req.body
    const newArticle=new Articles(articleObj)
    const newArticleObj=await newArticle.save()
    res.status(200).send({message:"article posted successfully!",payload:newArticleObj})
}))

//to get all articles whose isActive = true
authorApp.get('/articles',expressAsyncHandler(async(req,res)=>{
  const allArticles= await Articles.find({isArticleActive:true})
  res.status(200).send({message:"Fetched all articles!", payload:allArticles})
}))

//to modify an article by its id
authorApp.put('/article/:id',expressAsyncHandler(async(req,res)=>{
  const newModifiedArticle= await Articles.findByIdAndUpdate(req.params.id,req.body,{new:true})
  res.status(200).send({message:"Article modified successfully!",payload:newModifiedArticle})
}))

//to delete article(soft delete) i.e update isActive
authorApp.put('/articledel/:id',expressAsyncHandler(async(req,res)=>{
  const newModifiedArticle= await Articles.findByIdAndUpdate(req.params.id,{isArticleActive: false},{new:true})
  res.status(200).send({message:"Deleted successfully!",payload:newModifiedArticle})
}))
//to restore deleted article i.e update isActive
authorApp.put('/articledelrev/:id',expressAsyncHandler(async(req,res)=>{
  const newModifiedArticle= await Articles.findByIdAndUpdate(req.params.id,{isArticleActive: true},{new:true})
  res.status(200).send({message:"Deleted successfully!",payload:newModifiedArticle})
}))


module.exports=authorApp