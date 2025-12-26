import React from "react"
import { Button } from "@/components/ui/button"
import { useNavigate, Outlet, useLocation } from "react-router-dom"

const navButton = [
  { to: "/datasources", label: "Connected Sources" },
  { to: "/datasources/available", label: "Available Sources" },
  { to: "/datasources/configuration", label: "Configuration" },
]

const DataSource = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-[1250px] mx-auto space-y-8">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">Data Sources</h1>
            <p className="text-gray-500">
              Manage your data source connections
            </p>
          </div>
          <Button>+ Add Source</Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 text-sm bg-gray-100 w-fit rounded-lg p-1">
          {navButton.map((item) => (
            <button
              key={item.to}
              onClick={() => navigate(item.to)}
              className={`px-4 py-2 rounded-md transition ${
                isActive(item.to)
                  ? "bg-white font-medium shadow"
                  : "text-gray-500"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Nested Routes Render Here */}
        <Outlet />

      </div>
    </div>
  )
}

export default DataSource
