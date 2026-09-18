import {
  Funnel,
  Plus,
  List,
  Grid3X3,
  Eye,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Search, SlidersHorizontal, LayoutList, LayoutGrid } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import toast from "react-hot-toast";

const Emp = () => {
const [data,setdata]=useState([])
const [search,setsearch]= useState('')
const [department,setdepartment]= useState("All Departments" )
const [status,setstatus] = useState("All Statuses")

const GetAllEmp = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/GetAllEmp`);

    const data = await res.json(); 
setdata(data.data)
  
  } catch (err) {
    console.error(err);
  }
};
const DeleteEmp = async (id) => {
  if (!window.confirm("Are you sure to delete?")) return;

  try {
    await fetch(`${import.meta.env.VITE_API_URL}/api/v1/DeleteEms/${id}`, {
      method: "DELETE",
    });
toast.success("Employee Deleted Successfully")
    GetAllEmp();
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {
  GetAllEmp();
}, []);


const filterdata = data.filter((d) => {
  const matchSearch =
    d.firstname.toLowerCase().includes(search.toLowerCase().trim()) ||
    d.lastname.toLowerCase().includes(search.toLowerCase().trim()) ||
    d.email.toLowerCase().includes(search.toLowerCase().trim());

  const matchStatus = status === "All Statuses" || d.status === status;

  const matchDepartment = department === "All Departments" || d.department === department;

  return matchSearch && matchStatus  && matchDepartment;
  
});
console.log(department)
    return (

 


  <main >
  
<Link to={"/"}>
<ChevronLeft className="cursor-pointer ml-3.5 hover:text-primary hover:bg-primary/5 rounded-full "/>
</Link>
    {/* <!-- Content Area --> */}
    <div className="flex-1 overflow-y-auto p-6 space-y-6 max-h-[calc(100vh-64px)]">
      {/* <!-- Header Section --> */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold tracking-tight">Employee Directory</h1>
         <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
  Manage and monitor your workforce details here.
</p>
        </div>
        <div className="flex items-center gap-3">
       <Link to={"/AddEmp"}> 
          <button className="px-4 cursor-pointer py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-primary/20">
            <Plus/> Add New Employee
          </button></Link>  
        </div>
      </div>

     
  

         <div className="  lg:flex gap-3 items-center">
      
      {/* 🔍 Search */}
      <div className="relative flex items-center flex-1">
        <Search className="absolute left-3 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
        onChange={(e)=>setsearch(e.target.value)}
          placeholder="Search by name, email or department…"
          className="lg:w-full pl-9 pr-8 py-2 text-sm bg-muted/50 border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
        />
      </div>

     

      {/* 🧠 Filters */}
      <div className="flex mt-1 gap-2">
        <select onChange={(e)=>setdepartment(e.target.value)} className="text-sm bg-muted/50 border border-input rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all">
      <option value="All Departments">All Departments</option>
  <option value="Engineering">Engineering</option>
  <option value="Design">Design</option>
  <option value="Marketing">Marketing</option>
  <option value="Sales">Sales</option>
  <option value="HR">HR</option>
  <option value="Finance">Finance</option>
  <option value="Operations">Operations</option>
  <option value="Legal">Legal</option>
        </select>

        <select onChange={(e)=>setstatus(e.target.value)} className="text-sm bg-muted/50 border border-input rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all">
          <option>All Statuses</option>
          <option>Active</option>
          <option>Inactive</option>
        
        </select>
      </div>

  
    </div>

      {/* <!-- Employee Table --> */}
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-auto">
        <div className="sm:overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/30 border-b border-border">
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Employee</th>
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Department</th>
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {/* <!-- Employee Row 1 --> */}
             {
              filterdata?.map((d)=>{
                return (
                   <tr key={d?._id} className="hover:bg-muted/20 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={`https://api.dicebear.com/9.x/initials/svg?seed=${d?.firstname} ${d?.lastname}`} className="w-10 h-10 rounded-full border border-border" />
                    <div>
                      <p className="text-sm font-semibold">{d?.firstname} {d?.lastname}</p>
                      <p className="text-xs text-muted-foreground">{d?.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm">{d?.department}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium 
                    ${
                      d?.status==="Active"?"bg-tertiary/10 text-tertiary":"bg-red-100 text-red-600"
                    }
                    
                    `}>



                    <span className={`w-1.5 h-1.5 rounded-full
                    ${
                      d?.status === "Active" ? "bg-tertiary" :"bg-red-600"
                    }`}>
                      
                    </span>
                     {d?.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-muted-foreground">{d?.position}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Link to={`/EmpView/${d._id}`} >
                <button title="View" className="cursor-pointer p-2 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                      <Eye/>
                    </button>  </Link>  
                 <Link to={`/UpdateEmp/${d._id}`}>  <button title="Edit" className="cursor-pointer p-2 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                      <Pencil/>
                    </button></Link> 
                    <button onClick={()=>DeleteEmp(d._id)} title="Delete" className="cursor-pointer p-2 text-muted-foreground hover:text-red-600 hover:bg-primary/5 rounded-lg transition-all">
                      <Trash2/>
                    </button>
                  </div>
                </td>
              </tr>
                )
              })
             }
            </tbody>
          </table>
        </div>
        {/* <!-- Pagination --> */}
        <div className="p-4 border-t border-border flex items-center justify-between">
          <p className="text-xs text-muted-foreground">Showing 1 to 10 of 1,284 entries</p>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-border rounded-lg hover:bg-muted transition-colors disabled:opacity-50" disabled>
              <ChevronLeft/>
            </button>
            <button className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-lg">1</button>
            <button className="px-3 py-1.5 hover:bg-muted text-muted-foreground text-xs font-bold rounded-lg transition-colors">2</button>
            <button className="px-3 py-1.5 hover:bg-muted text-muted-foreground text-xs font-bold rounded-lg transition-colors">3</button>
            <button className="p-2 border border-border rounded-lg hover:bg-muted transition-colors">
             <ChevronRight/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>


    )
}




export default Emp;