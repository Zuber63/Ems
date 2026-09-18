const express = require("express")
const route = express.Router()
const {AddEmp} = require("../Controllers/AddEms")
const {DeleteEms} =require("../Controllers/DeleteEms")
const {UpdateEms} =require("../Controllers/UpdateEms")
const {GetAllEmp} = require("../Controllers/GetAllEmp")
const {GetSingleEmp} = require("../Controllers/GetSingleEmp")

route.post("/AddEmp",AddEmp)
route.delete("/DeleteEms/:id",DeleteEms)
route.put("/UpdateEms/:id",UpdateEms)
route.get("/GetAllEmp",GetAllEmp)
route.get("/GetSingleEmp/:id",GetSingleEmp)

module.exports=route
