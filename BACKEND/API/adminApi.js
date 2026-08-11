const exp=require('express')
const adminApp=exp.Router()
const expressAsyncHandler=require("express-async-handler")
adminApp.get('/',expressAsyncHandler(async(req,res)=>{
    res.send({message:"adminApp get route message"})
}))

module.exports=adminApp