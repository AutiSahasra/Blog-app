const exp=require('express')
const authorApp=exp.Router()

authorApp.get('/',(req,res)=>{
    res.send({message:"authorApp get route message"})
})

module.exports=authorApp