import React from 'react'
import { Check } from 'lucide-react'
const Completed = () => {
  return (
    <div>
        <div className="w-[1250px] m-auto mt-10">
      <div className="flex items-center justify-between border border-gray-200 rounded-xl bg-white px-6 py-5 shadow-sm">

        {/* Left Section */}
        <div className="flex items-start gap-4">
          
          {/* Success Icon */}
          <div className="flex items-center justify-center w-6 h-6 rounded-full border border-green-500">
            <Check className="w-4 h-4 text-green-500 " />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-[18px] font-semibold text-gray-900">
              Product Catalog Graph
            </h2>
            <p className="text-[11px] text-gray-500">
              Successfully completed
            </p>
            <p className="text-[13px] text-gray-600 mt-3">
              Processed <span className="font-medium">8,900</span> records successfully
            </p>
          </div>
        </div>

        {/* Status Badge */}
        <span className="px-4 py-1.5 text-[11px] font-medium text-green-700 bg-green-100 rounded-full">
          completed
        </span>

      </div>
    </div>
    </div>
  )
}

export default Completed