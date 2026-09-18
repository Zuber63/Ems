const mongoose = require("mongoose")

 exports.connectDB=async()=>{
    mongoose.connect("mongodb+srv://Zuber786:Zuber786@cluster0.zyjpvzf.mongodb.net/Ems?appName=Cluster0").then(()=>{
console.log("connect to mongo db")
    }).catch(()=>{
console.log("error found while connecting to mongo db")
    })
 }