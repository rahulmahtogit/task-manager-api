const express = require('express')
require('./db/mongoose')
const userRouter = require('./router/user-router')
const taskRouter = require('./router/task-router')

const port = process.env.PORT 

const app = express()
app.use(express.json())




app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log("Server is Connected on " + port)

})

// const multer = require('multer')
// const upload = multer({
//     dest:'images',

//     limits:{
//         fileSize:5000000
//     },
//     fileFilter(req,file,cb){
//         let re = RegExp(/\.(doc|docx)$/)
//         if(!re.test(file.originalname)){
//             return cb(new Error('Please upload a word document'))

//         }
//         cb(undefined,true)
//     }
// })

// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send()

// })
// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async ()=>{
//     // const task = await Task.findById('5f69940abc342c1f00acda53')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('5f6993d5bc342c1f00acda50')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }


// main()
// const myFunction = async() =>{
//     const token = jwt.sign({_id:'arb2'},"This is New Genrated Token",{expiresIn: '3 weeks'})
    
//     const data = jwt.verify(token,"This is New Genrated Token")
    
// }

// myFunction()










// pet = {
//     name :"Dog",
//     age:4
// }

// pet.toJSON = function (){
//     return {}
   
// }
// console.log(JSON.stringify(pet))


// MiddleWare Concept

// app.use((req,res,next) =>{

//     res.status(503).send("This Site is Currently Down")
//     // if(req.method === 'GET'){
//     //     res.send("Cannot Acces Get Method")
//     // }
//     // else{
//     //     next()
//     // }
// })
