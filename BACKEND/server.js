//CREATE HTTP SERVER
const exp=require('express')
const mongoose=require('mongoose')
const app=exp()
const userApp=require('./API/userApi')
const authorApp=require('./API/authorApi')
const adminApp=require('./API/adminApi')


require('dotenv').config(); // this makes everything available in process.env
 //to use things available in dotenv, cause if we talk about port no, we arent sure the same port is available in future, so we keep in .env
const port=process.env.PORT || 4000; //optional port is 4000

//db connectivity
mongoose.connect(process.env.DBURL)
.then(()=>{

    console.log('DB connection succesful!')
    app.listen(port,()=>{console.log(`HTTP server listening on ${port}`)})
})
.catch((e)=>{console.log(`error in DB connection ${e.message}`)})

app.use(exp.json()) //body parser middleware
app.use('/user-api',userApp)
app.use('/admin-api',adminApp)
app.use('/author-api',authorApp)
