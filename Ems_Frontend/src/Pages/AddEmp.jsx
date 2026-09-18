import Form from "../Components/Form";  
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";
const AddEmp = () => {

const AddEmployee = async(data)=>{
     try {

    const res = await fetch("http://localhost:3000/api/v1/AddEmp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });


    const result = await res.json();

  } catch (err) {
    console.error(err);
  }
}

    return (


 <>
       <div className="">
<Link to={"/Emp"}>
<ChevronLeft className="cursor-pointer ml-3.5 hover:text-primary hover:bg-primary/5 rounded-full "/>
</Link>
        <h2 className="text-lg font-semibold flex justify-center">Add New Employee</h2>
       </div>
    
      
   

<Form isedit={false} Emp={AddEmployee}  />


 </>

    )
}



export default AddEmp;