const Ems = require("../Models/Ems")

exports.UpdateEms = async(req,res)=>{
  try{ 
     const id= req.params.id

        const {     firstname,
            lastname,
            email,
            phone,
            department,
            dateOfJoining,
             position,
              salary,
              status,
              adress,}=req.body

const UpdateEms = await Ems.findByIdAndUpdate(id,{
     firstname,
            lastname,
            email,
            phone,
            department,
            dateOfJoining,
             position,
              salary,
              status,
              adress,
},{new:true})
return res.status(200).json({
    success:true,
    message:"ems update successfully",
    UpdateEms
    
})
}catch(e){
    return res.status(500).json({
        success:false,
        message:"error found while updating",
        error: e.message
    })
}

}