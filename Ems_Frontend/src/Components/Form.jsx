import { Link, useNavigate } from "react-router";
import {useForm} from "react-hook-form"
import { useEffect } from "react";
import toast from "react-hot-toast";
const Form = ({isedit , Emp ,singleemp}) => {
  const Navigate=useNavigate()
const {handleSubmit,register,reset}=useForm({
  defaultValues :singleemp

})
  const formattedDate = singleemp?.dateOfJoining?.split("T")[0];

 
useEffect(()=>{
   if (singleemp) {
      reset({
        ...singleemp,
        dateOfJoining: formattedDate
      });
    }

},[singleemp,reset])

const onSubmit = async (data) => {
  const toastId = toast.loading(
   
  );

  try {
    await Emp(data); 

    toast.success(
      !isedit
        ? "Employee Updated Successfully"
        : "Employee Created Successfully",
      { id: toastId }
    );

    Navigate("/Emp");
  } catch (err) {
    toast.error("Something went wrong", { id: toastId });
  }
};
  
    return (

      <form 
         onSubmit={handleSubmit(onSubmit)}>     
    <div className="flex-1  p-6 max-h-[calc(100vh-64px)] bg-muted/20">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* <!-- Form Section: Personal Info --> */}
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border bg-muted/10">
            <h3 className="font-bold text-lg">Personal Information</h3>
            <p className="text-xs text-muted-foreground">Basic details about the employee.</p>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 flex items-center gap-6">
              <div className="relative group">
                
            
              </div>
            
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold">First Name</label>
              <input {...register("firstname")} type="text" placeholder="e.g. John" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Last Name</label>
              <input {...register("lastname")} type="text" placeholder="e.g. Doe" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Email Address</label>
              <input {...register("email")} type="email" placeholder="john.doe@company.com" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Phone Number</label>
              <input {...register("phone")} type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
          </div>
        </div>

        {/* <!-- Form Section: Employment Info --> */}
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border bg-muted/10">
            <h3 className="font-bold text-lg">Employment Details</h3>
            <p className="text-xs text-muted-foreground">Role, department, and salary information.</p>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Department</label>
              <select {...register("department")} className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                <option disabled selected>Select Department</option>
                    <option>Engineering</option>
          <option>Design</option>
          <option>Marketing</option>
          <option>Sales</option>
          <option>HR</option>
          <option>Finance</option>
          <option>Operations</option>
          <option>Legal</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Job Title</label>
              <input {...register("position")}type="text" placeholder="e.g. Senior Developer" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Annual Salary ($)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                <input {...register("salary")} type="number" placeholder="85,000" className="w-full pl-8 pr-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Employment Status</label>
              <select
  {...register("status")}
  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
>
  <option value="Active">Active</option>
  <option value="Inactive">Inactive</option>
</select>
             
           
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Joining Date</label>
              <input {...register("dateOfJoining")}
              
              type="date" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Adrees </label>
              <input {...register("adress")} type="text" placeholder="e.g. Senior Developer" className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
             
            </div>
          </div>
        </div>

        {/* <!-- Additional Settings --> */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-5">
       
       <button   type="button" onClick={()=>{Navigate("/Emp")}} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-red-600 cursor-pointer">
          Cancel
        </button>
        <button  className="cursor-pointer px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
        {
          isedit? " Update Employee" :" Save Employee"
        } 
        </button>
      </div>
        </div>
      </div>
    </div>
    </form>
    )
}



export default Form;