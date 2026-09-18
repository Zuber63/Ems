const Ems = require("../Models/Ems")

exports.DeleteEms = async (req,res)=>{
    try{
        const {id} = req.params
        const d = await Ems.findByIdAndDelete(id)
       return res.status(200).json({
            success:true,
            message:"ems Deleted successfully",
            data: d
        })

    }catch(e){
        console.log(e)
return res.status(500).json({
    success:false,
    message:"error found while deleting ems"
})

    }
}