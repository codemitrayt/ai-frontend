import React from "react"
import {
  CheckCircle,
  Database,
  Cloud,
  AlertCircle,
  Settings,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate, Outlet, useLocation } from "react-router-dom"

const DataSources = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Active tab checker
  const isActive = (path) => location.pathname === path

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-[1250px] m-auto space-y-8">

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
          <button
            onClick={() => navigate("/datasources")}
            className={`px-4 py-2 rounded-md transition ${
              isActive("/datasources")
                ? "bg-white font-medium shadow"
                : "text-gray-500"
            }`}
          >
            Connected Sources
          </button>

          <button
            onClick={() => navigate("/datasources/available")}
            className={`px-4 py-2 rounded-md transition ${
              isActive("/datasources/available")
                ? "bg-white font-medium shadow"
                : "text-gray-500"
            }`}
          >
            Available Sources
          </button>

          <button
            onClick={() => navigate("/datasources/configuration")}
            className={`px-4 py-2 rounded-md transition ${
              isActive("/datasources/configuration")
                ? "bg-white font-medium shadow"
                : "text-gray-500"
            }`}
          >
            Configuration
          </button>
        </div>

        {/* 🔥 Nested pages render here */}
        <Outlet />

        {/* Connected Sources (default content) */}
        {isActive("/datasources") && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* PostgreSQL */}
            <div className="bg-white border rounded-xl p-6 flex justify-between hover:shadow-md transition">
              <div className="flex gap-4">
                <Database className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <h3 className="text-sm font-semibold">
                    Production PostgreSQL
                  </h3>
                  <span className="inline-block mt-1 text-[12px] bg-gray-100 px-3 py-1 rounded-full">
                    Database
                  </span>
                  <div className="mt-4">
                    <span className="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full text-[11px]">
                      Connected
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <CheckCircle className="text-green-500 w-5 h-5" />
                <Settings className="text-gray-500 cursor-pointer w-5 h-5" />
              </div>
            </div>

            {/* Salesforce */}
            <div className="bg-white border rounded-xl p-6 flex justify-between hover:shadow-md transition">
              <div className="flex gap-4">
                <Cloud className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <h3 className="text-sm font-semibold">
                    Salesforce CRM
                  </h3>
                  <span className="inline-block mt-1 text-[12px] bg-gray-100 px-3 py-1 rounded-full">
                    CRM
                  </span>
                  <div className="mt-4">
                    <span className="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full text-[11px]">
                      Connected
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <CheckCircle className="text-green-500 w-5 h-5" />
                <Settings className="text-gray-500 cursor-pointer w-5 h-5" />
              </div>
            </div>

            {/* Orders API */}
            <div className="bg-white border rounded-xl p-6 flex justify-between hover:shadow-md transition">
              <div className="flex gap-4">
                <Globe className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <h3 className="text-sm font-semibold">
                    Orders API
                  </h3>
                  <span className="inline-block mt-1 text-[12px] bg-gray-100 px-3 py-1 rounded-full">
                    API
                  </span>
                  <div className="mt-4">
                    <span className="bg-red-100 text-red-700 font-semibold px-3 py-1 rounded-full text-[11px]">
                      Error
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <AlertCircle className="text-red-500 w-5 h-5" />
                <Settings className="text-gray-500 cursor-pointer w-5 h-5" />
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}

export default DataSources
