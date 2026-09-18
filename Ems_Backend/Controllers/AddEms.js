const Ems = require("../Models/Ems")


exports.AddEmp=async(req,res)=>{
    try{
        console.log(req.body)
        const {firstname,email,phone,department,dateOfJoining, position, salary,lastname,adress,status}=req.body

                if (!firstname || !lastname || !email || !phone || !department || !position || !salary || !status || !adress  ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const existingUser = await Ems.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Employee with this email already exists"
            })
        }
        const data = await Ems.create({
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

        })
        return res.status(201).json({
            success:true,
            message:"emp Create successfully",
            data:data

        })

    }catch(e){
console.log(e)

return res.status(500).json({
   success: false,
            message: "Error creating employee",
            error: e.message
})
    }
}