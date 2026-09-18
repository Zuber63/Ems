
import React, { useState,useEffect } from "react";
import {NavLink, Link, useParams } from "react-router";
import {
  Menu,
  Bell,
  Moon,
  X,
  ChevronDown,
  LayoutDashboard,
  Users,
  Settings,
  ChevronRight,
  Building2,
  UserCheck,
  UserPlus,
} from "lucide-react";
import { Outlet } from "react-router";

export default function App() {


  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("dashboard");

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard ,path: "/"},
    { id: "employees", label: "Employees", icon: Users , path: "/Emp" },
  ];

  return (
    <div className="flex h-screen bg-[#FCFCFC] overflow-hidden">

      {/* SIDEBAR */}
      <div
        className={`fixed md:static z-40 w-64 h-full bg-white shadow-sm border-r border-gray-300
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >

        {/* LOGO SECTION (MATCH HEADER HEIGHT) */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-300">

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-md">
              <Building2 className="text-white w-5 h-5" />
            </div>

            <div className="leading-tight">
              <h1 className="text-sm font-semibold">TechCorp HR</h1>
              <p className="text-xs text-gray-500">Employee Portal</p>
            </div>
          </div>

          {/* CLOSE BTN */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-2 rounded hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>

        </div>

        {/* NAV */}
        <nav className="p-3 space-y-1">

          <p className="text-xs text-gray-400 px-3 mb-2">
            MAIN MENU
          </p>

 {navItems.map((item) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      key={item.id}
      onClick={() => setSidebarOpen(false)}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition
        ${
          isActive
            ? "bg-blue-50 text-blue-600 shadow-sm"
            : "text-gray-500 hover:bg-gray-100"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon className="w-5 h-5" />
          <span className="flex-1">{item.label}</span>
          {isActive && <ChevronRight className="w-4 h-4" />}
        </>
      )}
    </NavLink>
  );
})}
        </nav>
      </div>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* HEADER (SAME HEIGHT = 64px) */}
        <header className="sticky top-0 z-20 h-16 bg-white border-b border-gray-300 shadow-sm py-6 w-full b flex items-center px-4 justify-between">

          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 rounded hover:bg-gray-100"
          >
            <Menu />
          </button>

          <h1 className="font-semibold text-gray-700">
            Dashboard
          </h1>

          <div className="flex items-center gap-3">

            <button className="p-2 rounded hover:bg-gray-100">
              <Bell className="w-5 h-5" />
            </button>

            <button className="p-2 rounded hover:bg-gray-100">
              <Moon className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                ZS
              </div>
              <span className="hidden sm:block text-sm">
                Zuber Saifi
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
            </div>

          </div>
        </header>

        {/* PAGE */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

/* Components */



function Bar({ label, width }) {
  return (
    <div className="mb-3">
      <p className="text-sm">{label}</p>
      <div className="bg-gray-200 h-2 rounded">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width }}
        />
      </div>
    </div>
  );
}

function Activity({ name, text }) {
  return (
    <div className="border-b py-2">
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  );
}