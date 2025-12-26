import React from "react"

const Configuration = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-[1250px] m-auto bg-white border rounded-xl p-8">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-900">
          Source Configuration
        </h2>
        <p className="text-gray-500 mt-1 text-sm">
          Configure connection settings for your data sources
        </p>

        {/* Form */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Connection Timeout */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Connection Timeout (seconds)
            </label>
            <input
              type="number"
              defaultValue={30}
              className="w-full rounded-sm border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Retry Attempts */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Retry Attempts
            </label>
            <input
              type="number"
              defaultValue={3}
              className="w-full rounded-sm border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Batch Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Batch Size
            </label>
            <input
              type="number"
              defaultValue={1000}
              className="w-full rounded-sm border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Sync Interval */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sync Interval (minutes)
            </label>
            <input
              type="number"
              defaultValue={60}
              className="w-full rounded-sm border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-black text-white px-6 py-2 text-[15px] rounded-sm hover:bg-gray-800 transition">
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  )
}

export default Configuration