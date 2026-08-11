 const UserAuthor=require('./MODELS/userAuthorModel')

 async function createUserOrAuthor(req,res){
    let userOrAuthor=req.body;
    //find if req email's user or author present in db
    let userInDb=UserAuthor.findOne({email:userOrAuthor.email})
    if(userInDb!=null)//if u find
    {
        if(userInDb.role==userOrAuthor.role)
        {
            res.status(200).send({message:"user already exist",payload:userInDb})
        }
        else
        {
            res.send({message:"unknown error! try with another email"})
        }
    }
    else//if no such user exist
    {
        const newUserOrAuthor= new UserAuthor(userOrAuthor)
        await newUserOrAuthor.save()
        res.status(201).send({message:"created Successfully", payload:userOrAuthor})
    }
 }

 module.exports=createUserOrAuthor