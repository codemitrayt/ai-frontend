import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import StatCard2 from "../reuseComponent/StatCard2"
import {
  CheckCircle,
  Database,
  Activity,
  Triangle,
} from "lucide-react"

const Applications = () => {
  const tabBaseClass =
    "px-4 py-2 rounded-sm text-sm font-medium transition"

  const activeClass =
    "bg-white shadow text-black"

  const inactiveClass =
    "text-gray-500 hover:text-black"

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-[1250px] mx-auto space-y-8">

        {/* ===== Header ===== */}
        <div>
          <h1 className="text-2xl font-bold">Application Progress</h1>
          <p className="text-gray-500 text-sm">
            Track the progress of your knowledge graph applications
          </p>
        </div>

        {/* ===== Stats ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard2
            title="Total Records"
            value="43,700"
            subtitle="Across all applications"
            icon={Database}
          />
          <StatCard2
            title="Processed"
            value="21,400"
            subtitle="Records processed"
            icon={Activity}
          />
          <StatCard2
            title="Active Jobs"
            value="1"
            subtitle="Currently processing"
            icon={Triangle}
          />
          <StatCard2
            title="Completion Rate"
            value="33%"
            subtitle="Applications completed"
            icon={CheckCircle}
          />
        </div>

        {/* ===== Tabs (ROUTING BASED) ===== */}
        <div className="flex gap-2 bg-gray-100 p-1 rounded-sm w-fit">

          <NavLink
            end
            to="/application"
            className={({ isActive }) =>
              `${tabBaseClass} ${
                isActive ? activeClass : inactiveClass
              }`
            }
          >
            All Applications (3)
          </NavLink>

          <NavLink
            to="/application/processing"
            className={({ isActive }) =>
              `${tabBaseClass} ${
                isActive ? activeClass : inactiveClass
              }`
            }
          >
            Processing (1)
          </NavLink>

          <NavLink
            to="/application/completed"
            className={({ isActive }) =>
              `${tabBaseClass} ${
                isActive ? activeClass : inactiveClass
              }`
            }
          >
            Completed (1)
          </NavLink>

          <NavLink
            to="/application/pending"
            className={({ isActive }) =>
              `${tabBaseClass} ${
                isActive ? activeClass : inactiveClass
              }`
            }
          >
            Pending (1)
          </NavLink>
        </div>

        {/* ===== CHILD ROUTES RENDER HERE ===== */}
        <Outlet />

      </div>
    </div>
  )
}

export default Applications
