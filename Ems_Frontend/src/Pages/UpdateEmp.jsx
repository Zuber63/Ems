import Form from "../Components/Form";
import { useEffect, useState } from "react";
import { Link, useParams ,useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
const UpdateEmp = () => {
    const Navigate =useNavigate()
const {id}= useParams()
const [data,setdata]=useState([])

const GetAllEmp = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/v1/GetSingleEmp/${id}`);
    
    const data = await res.json(); 
  
setdata(data.data)
  
  } catch (err) {
    console.error(err);
  }
};
useEffect(() => {
  GetAllEmp();
}, [id]);

const UpdateEmployee = async (data) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/v1/UpdateEms/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await res.json();

    if (!res.ok) {
      console.error("Error:", result.message);
      return;
    }

    console.log("Updated successfully:", result);

  } catch (err) {
    console.error("Catch error:", err);
  }
};
    return (






        <>
               <div className="">
<Link to={"/Emp"}>
<ChevronLeft className="cursor-pointer ml-3.5 hover:text-primary hover:bg-primary/5 rounded-full "/>
</Link>
        <h2 className="text-lg font-semibold flex justify-center">Edit Employee</h2>
       </div>
          <Form isedit={true} Emp={UpdateEmployee} singleemp={data}/>
        </>

    )
}


export default UpdateEmp;