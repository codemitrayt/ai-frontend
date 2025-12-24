import React from 'react'
import StatCard from "../reuseComponent/StatCard"
import ApplicationRow from "../reuseComponent/ApplicationRow"
import { CheckCircle,  Database, Cloud, AlarmCheck, AlertCircle, Activity, PanelsTopLeft, User,   } from "lucide-react"

const Overview = () => {
  return (
     <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-[1250px] mx-auto space-y-8">

       {/* StatCart */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <StatCard
          title="Total Applications"
          value="3"
          subtitle="+2 from last month"
          icon={Database}
        />
        
        <StatCard
          title="Active Processing"
          value="1"
          subtitle="Currently running"
          icon={Activity}
        />
        
        <StatCard
          title="Data Processed"
          value="21,400"
          subtitle="Records processed"
          icon={CheckCircle}
        />
        
        <StatCard
          title="Teams"
          value="5"
          subtitle="Active teams"
          icon={User}
        />
        </div>

        {/* Recent Applications */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-2xl font-bold">Recent Applications</h2>
          <p className="text-gray-500 text-sm mb-6">
            Your latest knowledge graph applications
          </p>

          <div className="space-y-4">
            <ApplicationRow
              title="Customer Analytics KG"
              records="12,500 / 19,200 records"
              status="processing"
              progress={65}
              icon={AlarmCheck}
            />

            <ApplicationRow
              title="Product Catalog Graph"
              records="8,900 / 8,900 records"
              status="completed"
              progress={100}
              icon={CheckCircle}
            />

            <ApplicationRow
              title="Supply Chain Network"
              records="0 / 15,600 records"
              status="pending"
              progress={0}
              icon={AlertCircle}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Overview