const exp=require('express')
const adminApp=exp.Router()

adminApp.get('/',(req,res)=>{
    res.send({message:"adminApp get route message"})
})

module.exports=adminApp