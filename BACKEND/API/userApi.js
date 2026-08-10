const exp=require('express')
const userApp=exp.Router()
const UserAuthor=require('../MODELS/userAuthorModel')

userApp.get('/users',async(req,res)=>{
    try
    {
    const users= await UserAuthor.find({})
    res.send({message:"users, authors fetched", payload:users})
    }
    catch(e)
    {
        res.send(`error occured: ${e.message}`)
    }
})

module.exports=userApp