import { Database, AlarmCheck } from 'lucide-react'

import StatCard from './components/stat-card'
import ApplicationRow from './components/application-row'

const statData = [
  {
    title: 'Total Applications',
    value: '3',
    subTitle: '+2 from last month',
    icon: Database,
  },
  {
    title: 'Total Applications',
    value: '3',
    subTitle: '+2 from last month',
    icon: Database,
  },
  {
    title: 'Total Applications',
    value: '3',
    subTitle: '+2 from last month',
    icon: Database,
  },
  {
    title: 'Total Applications',
    value: '3',
    subTitle: '+2 from last month',
    icon: Database,
  },
]

const applicationData = [
  {
    title: 'Customer Analytics KG',
    record: '12,500 / 19,200 records',
    status: 'processing',
    progress: 65,
    icon: AlarmCheck,
  },
  {
    title: 'Customer Analytics KG',
    record: '12,500 / 19,200 records',
    status: 'processing',
    progress: 65,
    icon: AlarmCheck,
  },
  {
    title: 'Customer Analytics KG',
    record: '12,500 / 19,200 records',
    status: 'processing',
    progress: 65,
    icon: AlarmCheck,
  },
  {
    title: 'Customer Analytics KG',
    record: '12,500 / 19,200 records',
    status: 'processing',
    progress: 65,
    icon: AlarmCheck,
  },
]

const Overview = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-[1250px] mx-auto space-y-8">
        {/* StatCart */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {statData.map((stat, index) => (
            <StatCard stat={stat} key={index} />
          ))}
        </div>

        {/* Recent Applications */}
        <div className="bg-white rounded-xl border p-6">
          <h2 className="text-2xl font-bold">Recent Applications</h2>
          <p className="text-gray-500 text-sm mb-6">
            Your latest knowledge graph applications
          </p>

          <div className="space-y-4">
            {applicationData.map((application, index) => (
              <ApplicationRow application={application} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
