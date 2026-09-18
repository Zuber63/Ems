const Ems = require("../Models/Ems")

exports.GetAllEmp =async(req,res)=>{
    try{
        const AllEmp= await Ems.find()
        return res.status(200).json({
            success:true,
            message:"Get All Emp Successfully",
data:AllEmp
        })

    }catch(e){
return res.status(500).json({
    success:true,
    message:"error found while geting All emp",
    error: e.message
})
    }
}