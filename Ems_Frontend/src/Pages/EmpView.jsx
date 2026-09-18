import { CreditCard,
     ChevronRight,
  Pencil,
  ChevronLeft,
  Trash2,
 Info,
 Calendar ,
 MapPin,
 Mail


 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams ,useNavigate } from "react-router";
import toast from "react-hot-toast";
const EmpView = () => {
const Navigate =useNavigate()
const {id}= useParams()
const [data,setdata]=useState([])

const GetAllEmp = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/GetSingleEmp/${id}`);
    
    const data = await res.json(); 
  
setdata(data.data)
  
  } catch (err) {
    console.error(err);
  }
};
const DeleteEmp = async () => {
  if (!window.confirm("Are you sure to delete?")) return;

  try {
    await fetch(`${import.meta.env.VITE_API_URL}/api/v1/DeleteEms/${id}`, {
      method: "DELETE",
    });
toast.success("Employee Deleted Successfully")
    Navigate("/Emp")
  } catch (err) {
    console.error(err);
  }
};


useEffect(() => {
  GetAllEmp();
}, [id]);



    return (
  
   

<div className="min-h-screen w-full bg-background flex flex-row relative font-sans text-foreground">


  {/* <!-- Main Content --> */}
  <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
    {/* <!-- Navbar --> */}
    <header className="h-16 border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-10 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={()=>Navigate("/Emp")} className="cursor-pointer p-2 hover:text-primary hover:bg-primary/5 rounded-full ">
 < ChevronLeft/>
          
        </button>
       
      </div>
      <div className="flex items-center gap-3">
        <button  onClick={()=>Navigate(`/UpdateEmp/${id}`)} className="px-4 py-2 border border-border rounded-lg text-sm font-medium cursor-pointer hover:text-primary transition-colors flex items-center gap-2">
  <Pencil/>   Edit Profile
        </button>
        <button onClick={()=>DeleteEmp()} className="p-2 text-muted-foreground cursor-pointer transition-colors hover:text-red-600 ">
 < Trash2/>
        
        </button>
      </div>
    </header>

    {/* <!-- Content Area --> */}
    <div className="flex-1 overflow-y-auto p-6 space-y-6 max-h-[calc(100vh-64px)]">
      {/* <!-- Profile Header Card --> */}
      <div className="bg-card border border-border rounded-2xl p-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/20 to-tertiary/20"></div>
        <div className="relative flex flex-col md:flex-row items-center md:items-end gap-6">
          <div className="relative">
            <img src={`https://api.dicebear.com/9.x/initials/svg?seed=${data?.firstname} ${data?.lastname}`} className="w-32 h-32 rounded-2xl border-4 border-card shadow-xl object-cover" />
            <div className={`absolute -bottom-2 -right-2 w-8 h-8 border-4 border-card rounded-full
               ${data?.status === "Active" ? "bg-green-500 ":"bg-red-600 "
                }
              `}></div>
          </div>
          <div className="flex-1 text-center md:text-left pb-2">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <h1 className="text-3xl font-heading font-bold tracking-tight">{data?.firstname} {data?.lastname}</h1>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide w-fit mx-auto md:mx-0
                ${data?.status === "Active" ? "bg-tertiary/10 text-tertiary":"bg-red-100 text-red-500"
                }`}>
                {data?.status}
              </span>
            </div>
            <p className="text-lg text-muted-foreground font-medium">{data?.position} • {data?.department} Department</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="text-primary w-5 h-5" />
                {data?.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
               <MapPin className="text-primary w-5 h-5" />
                {data?.adress}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
         <Calendar className="text-primary w-5 h-5" />
                {data?.dateOfJoining?.split("T")[0]}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Details Grid --> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* <!-- Left Column: Info --> */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
           <Info className="text-primary w-5 h-5" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Full Name</p>
                <p className="font-medium">{data?.firstname} {data?.lastname}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Email Address</p>
                <p className="font-medium">{data?.email}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Phone Number</p>
                <p className="font-medium">{data?.phone}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Department</p>
                <p className="font-medium">{data?.department}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Position</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="font-medium">{data?.position}</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Work Location</p>
                <p className="font-medium">Hybrid (Office A)</p>
              </div>
            </div>
          </div>

        </div>

        {/* <!-- Right Column: Stats/Actions --> */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
<CreditCard className="text-primary w-5 h-5" />              Salary & Benefits
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Base Salary</p>
                <p className="text-2xl font-bold">${data?.salary}<span className="text-sm font-normal text-muted-foreground"> / year</span></p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Benefits</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-accent rounded text-[10px] font-bold">Health Insurance</span>
                  <span className="px-2 py-1 bg-accent rounded text-[10px] font-bold">401(k) Matching</span>
                  <span className="px-2 py-1 bg-accent rounded text-[10px] font-bold">Remote Stipend</span>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  </main>
</div>

    )
}


export default EmpView;