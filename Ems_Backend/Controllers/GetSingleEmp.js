const mongoose = require("mongoose")
const Ems = require("../Models/Ems")

exports.GetSingleEmp = async (req, res) => {
    try {
        const { id } = req.params

        // 1. Check valid MongoDB ID
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid employee ID"
            })
        }

        // 2. Find employee
        const singleEmp = await Ems.findById(id)

        if (!singleEmp) {
            return res.status(404).json({
                success: false,
                message: "Employee not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Employee fetched successfully",
            data: singleEmp
        })

    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Error while fetching employee",
            error: e.message
        })
    }
}