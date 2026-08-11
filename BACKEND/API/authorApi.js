const exp=require('express')
const authorApp=exp.Router()
const expressAsyncHandler=require("express-async-handler")

authorApp.get('/',expressAsyncHandler(async(req,res)=>{
    res.send({message:"authorApp get route message"})
}))

module.exports=authorApp