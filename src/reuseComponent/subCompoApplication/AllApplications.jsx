import React from 'react'
import { CheckCircle,  Database, Cloud, AlarmCheck, AlertCircle, Activity, PanelsTopLeft, User, Triangle,   } from "lucide-react"
import ApplicationRow2 from '../ApplicationRow2'

const AllApplications = () => {
  return (
    <div>

         {/* Application Cards */}
        <div className="space-y-6">
          <ApplicationRow2
            id="customer-analytics"
            title="Customer Analytics KG"
            team="Analytics Team"
            date="2024-01-15"
            status="processing"
            progress={65}
            records="12,500 / 19,200"
            time="2h 15m remaining"
            sources={["PostgreSQL", "Salesforce", "CSV Files"]}
          />

          <ApplicationRow2
            id="product-catalog"
            title="Product Catalog Graph"
            team="Product Team"
            date="2024-01-10"
            status="completed"
            progress={100}
            records="8,900 / 8,900"
            time="Completed"
            sources={["MongoDB", "REST API", "JSON Files"]}
          />

         <ApplicationRow2
           id="supply-chain"
           title="Supply Chain Network"
           date="2024-01-20"
           team="Operations Team"
           progress={0}
           status="pending"
           records="0 / 15,600"
           time="Not started"
           sources={["Oracle DB", "XML Files"]}
          />

        </div>

    </div>
  )
}

export default AllApplications