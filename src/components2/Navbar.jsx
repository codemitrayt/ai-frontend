import React from "react"
import { NavLink } from "react-router-dom"
import { Button } from "../components/ui/button"

const navItems = [
  { name: "Overview", path: "/" },
  { name: "Applications", path: "/application" },
  { name: "Data Sources", path: "/datasources" },
  { name: "RBAC & Teams", path: "/rbacteam" },
  { name: "App Builder", path: "/appbuilder" },
  { name: "AI Models", path: "/aimodel" },
]

const Navbar = () => {
  return (
    <div className="bg-gray-50">
      {/* Top Navbar */}
      <nav className="bg-white border-b">
        <div className="px-6 py-6 flex items-center justify-between m-auto w-[1250px]">
          <div>
            <h1 className="text-3xl font-bold">
              Knowledge Graph Service
            </h1>
            <p className="text-sm text-muted-foreground">
              Build and manage your knowledge graphs at scale
            </p>
          </div>

          <Button>+ Create App</Button>
        </div>
      </nav>

      {/* Tabs */}
      <div className="px-6 mt-6 m-auto w-[1250px] ">
        <div className="flex justify-between m-auto w-full text-sm bg-gray-100 rounded-sm">
          {navItems.map((navItem) => (
            <NavLink
              key={navItem.path}
              to={navItem.path}
              className={({ isActive }) =>
                `py-2 px-6  transition-all ${
                  isActive
                    ? "bg-white rounded-sm text-gray-600 "
                    : "text-gray-600 hover:bg-white-100"
                }`
              }
            >
              {navItem.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
