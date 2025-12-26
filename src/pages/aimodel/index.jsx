import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'

const modelPage = [
  {
    to: 'model',
    label: 'Model Selection',
  },
  {
    to: 'recommendation',
    label: 'Recommendations',
  },
]

const AiModel = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-[1250px] mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-2 border shadow-sm p-5">
          <h1 className="text-3xl  font-bold text-slate-900">
            AI Models for Data Extraction
          </h1>
          <p className="text-slate-500  text-base">
            Choose the right AI models for extracting structured information
            from your data sources
          </p>
        </div>

    

        {/* Tabs */}
        <div className="w-[1250px] mx-auto bg-gray-100  rounded-sm  border ">
          <div className="grid grid-cols-2 text-sm">
            {modelPage.map((model, index) => (
              <button
                key={index}
                onClick={() => navigate(model.to)}
                className={`py-2 rounded-lg transition duration-200 text-center
          ${
            isActive(model.to)
              ? 'bg-white font-medium shadow'
              : 'text-slate-500 hover:text-slate-800'
          }`}
              >
                {model.label}
              </button>
            ))}
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  )
}

export default AiModel
