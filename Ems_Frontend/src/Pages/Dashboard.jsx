import React, { useState,useEffect } from "react";

 import {
  Menu,
  Bell,
  Moon,
  ChevronDown,
  LayoutDashboard,
  Users,
  Settings,
  ChevronRight,
  Building2,
  UserCheck,
  UserPlus,
  ArrowRight, 
  Plus ,
    Activity,
  Clock,
//   UserCheck,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router";
const Dashboard = () => {
const [data,setdata]=useState([])
  const GetAllEmp = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/GetAllEmp`);

    const data = await res.json(); 
    setdata(data.data)
    
  } catch (err) {
    console.error(err);
  }
};

const Active = data.filter((d)=>d.status === "Active")
const Inactive = data.filter((d)=>d.status === "Inactive")
const Departments = data.filter((d)=>d.department)



  useEffect(() => {
  GetAllEmp();
}, []);

    const activities = [
    {
      name: "Arjun Sharma",
      date: "1 Mar 2024",
      text: "Designation changed to Senior Software Engineer",
      badge: "Profile Updated",
      by: "HR Admin",
      icon: Activity,
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      name: "Ananya Krishnan",
      date: "28 Feb 2024",
      text: "Maternity leave approved for 3 months",
      badge: "Leave Approved",
      by: "Sneha Reddy",
      icon: Clock,
      color: "bg-yellow-50 text-yellow-600 border-yellow-200",
    },
    {
      name: "Kavya Rao",
      date: "25 Feb 2024",
      text: "Employee marked inactive after resignation",
      badge: "Status Changed",
      by: "HR Admin",
      icon: UserCheck,
      color: "bg-red-50 text-red-600 border-red-200",
    },
    {
      name: "Abhishek Pandey",
      date: "7 Feb 2024",
      text: "New employee onboarded - Data Scientist",
      badge: "Employee Added",
      by: "Pooja Chakraborty",
      icon: UserPlus,
      color: "bg-green-50 text-green-600 border-green-200",
    },
    {
      name: "Suresh Kumar",
      date: "15 Jan 2024",
      text: "Annual appraisal – 15% increment applied",
      badge: "Salary Revised",
      by: "Finance Admin",
      icon: TrendingUp,
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
  ];

     const departments = [
    { name: "Engineering", value: 7, percent: 100, active: 86, color: "#6366f1" },
    { name: "Design", value: 2, percent: 29, active: 100, color: "#ec4899" },
    { name: "Marketing", value: 3, percent: 43, active: 67, color: "#f59e0b" },
    { name: "HR", value: 2, percent: 29, active: 100, color: "#22c55e" },
    { name: "Sales", value: 3, percent: 43, active: 100, color: "#3b82f6" },
    { name: "Finance", value: 2, percent: 29, active: 100, color: "#a855f7" },
    { name: "Operations", value: 2, percent: 29, active: 50, color: "#f97316" },
    { name: "Legal", value: 2, percent: 29, active: 50, color: "#14b8a6" },
  ];
    return (

      <>
  {/* HEADER */}
  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-4 sm:p-6">

    <div>
      <h1 className="text-xl sm:text-2xl font-bold">Dashboard</h1>
      <p className="text-sm text-gray-500 mt-1">
        Welcome back — here's your workforce overview
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-3 sm:items-center">

      <Link
      to={"/Emp"}
              className="flex items-center justify-center gap-2 border bg-white hover:bg-gray-100 rounded-md px-4 py-2 text-sm transition"

      >
        <Users className="w-4 h-4" />
        All Employees
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>

      <Link
        to={"/AddEmp"}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-primary/20">
       
        <Plus className="w-4 h-4" />
        Add Employee
      </Link>

    </div>
  </div>

  {/* STATS */}
  <div className="p-4 sm:p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <Card title="Total Employees" value={data?.length} icon={<Users />} />
      <Card title="Active Employees" value={Active?.length} icon={<UserCheck />} />
      <Card title="Inactive Employees" value={Inactive?.length} icon={<UserPlus />} />
      <Card title="Departments" value={Departments?.length} icon={<Building2 />} />
    </div>
  </div>

  {/* MAIN GRID */}
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-4 sm:p-6">

    {/* DEPARTMENT CARD */}
   <div className="bg-white rounded-xl shadow-sm py-6 w-full">

  {/* Header */}
  <div className="flex items-center justify-between px-4 sm:px-6 pb-4 border-b">
    <h2 className="font-semibold text-base">
      Headcount by Department
    </h2>

    <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
      8 Depts
    </span>
  </div>

  {/* Bars */}
  <div className="px-4 sm:px-6 space-y-4 mt-4">

    {departments.map((dept, i) => (
      <div key={i} className="space-y-1">

        {/* Row 1: label + value */}
        <div className="flex items-center justify-between">

          <span className="text-xs text-gray-500 truncate">
            {dept.name}
          </span>

          <span className="text-xs font-semibold">
            {dept.value} ({dept.active}%)
          </span>

        </div>

        {/* Row 2: bar (IMPORTANT FIX) */}
        <div className="w-full h-3 sm:h-4 bg-gray-100 rounded-full overflow-hidden">

          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${dept.percent}%`,
              backgroundColor: dept.color,
              minWidth: "6px", // 👈 FIX: mobile pe invisible nahi hoga
            }}
          />
        </div>

      </div>
    ))}
  </div>

  {/* Footer */}
  <div className="flex flex-col sm:flex-row gap-3 sm:items-center mt-5 pt-4 border-t px-4 sm:px-6 text-xs">

    <div className="flex items-center gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
      <span className="text-gray-500">Active</span>
    </div>

    <div className="flex items-center gap-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
      <span className="text-gray-500">Inactive / Leave</span>
    </div>

    <div className="sm:ml-auto text-gray-500">
      Total: 23 employees
    </div>

  </div>

</div>

    {/* ACTIVITY CARD */}
    <div className="bg-white rounded-xl shadow-sm py-6 w-full">

      <div className="flex items-center justify-between px-4 sm:px-6 pb-4 border-b">
        <h2 className="font-semibold">Recent Activity</h2>
        <Activity className="w-4 h-4 text-gray-400" />
      </div>

      <div className="px-4 sm:px-6">

        {activities.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="flex items-start gap-3 py-4 border-b last:border-0"
            >

              <div className={`p-2 rounded-lg border ${item.color}`}>
                <Icon className="w-3.5 h-3.5" />
              </div>

              <div className="flex-1 min-w-0">

                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <p className="text-sm font-medium truncate">
                    {item.name}
                  </p>
                  <span className="text-xs text-gray-400">
                    {item.date}
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                  {item.text}
                </p>

                <div className="flex flex-wrap gap-2 mt-1.5">
                  <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded">
                    {item.badge}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    by {item.by}
                  </span>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </div>

  </div>

  {/* QUICK ACTIONS */}
  <div className="px-4 sm:px-6 pb-6">

    <div className="bg-white rounded-xl shadow-sm py-6 w-full">

      <div className="px-5">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">

          <div>
            <p className="text-sm font-semibold">
              Quick Actions
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Manage your workforce efficiently
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">

            <Link
            to={"/Emp"}
              className="flex items-center justify-center gap-2 border bg-white hover:bg-gray-100 rounded-md px-3 py-2 text-sm transition"
            >
              <Users className="w-3.5 h-3.5" />
              View Employees
            </Link>

            <Link
               to={"/AddEmp"}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-primary/20">
       
            
              <Plus className="w-3.5 h-3.5" />
              Add Employee
            </Link>

          </div>

        </div>

      </div>

    </div>

  </div>
</>

    )
}



function Card({ title, value, icon }) {
  return (
    <div className="bg-[#F6F8FA] p-5 rounded-xl shadow-sm flex flex-col gap-3">
      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-xl font-bold">{value}</h2>
      </div>
    </div>
  );
}


export default Dashboard;