import React from "react"
import { Clock } from "lucide-react"

const Processing = () => {
  const progress = 65

  return (
    <div className="bg-gray-50 min-h-screen p-6 ">
      <div className="w-[1250px] m-auto bg-white border rounded-xl p-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <div className="mt-1 text-blue-500">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-[18px] font-semibold text-gray-900">
                Customer Analytics KG
              </h2>
              <p className="text-sm text-gray-500">
                Currently processing data...
              </p>
            </div>
          </div>

          <span className="bg-blue-100 text-blue-700 text-[11px] font-medium px-4 py-1.5 rounded-full">
            processing
          </span>
        </div>

        {/* Progress Section */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Progress
            </span>
            <span className="text-sm font-medium text-gray-700">
              {progress}%
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-black rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 flex justify-between text-[12px] text-gray-700">
          <span>Processing Rate: 1,250 records/min</span>
          <span>ETA: 2h 15m</span>
        </div>
      </div>
    </div>
  )
}

export default Processing
