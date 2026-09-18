const mongoose = require("mongoose")

 exports.connectDB=async()=>{
    mongoose.connect("mongodb://localhost:27017/Ems").then(()=>{
console.log("connect to mongo db")
    }).catch(()=>{
console.log("error found while connecting to mongo db")
    })
 }