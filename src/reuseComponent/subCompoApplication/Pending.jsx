import React from "react"
import { Play, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const Pending = () => {
  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm flex flex-col gap-3 w-full max-w-[1250px]">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <h3 className="text-[18px] font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-yellow-500" />
            Supply Chain Network
          </h3>
          <p className="text-gray-500 text-[12px]">Waiting to start processing</p>
        </div>

        <span className="text-[11px] font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
          pending
        </span>
      </div>

      {/* Body */}
      <p className="text-gray-600 text-sm">
        Ready to process 15,600 records
      </p>

      {/* Action */}
      <div className="mt-2 flex  p-1 justify-end">
        <Button variant="default" className="flex items-center gap-2">
          <Play className="w-3 h-3 text-sm" /> Start
        </Button>
      </div>
    </div>
  )
}

export default Pending
