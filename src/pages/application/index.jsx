import { Database } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'

import { cn } from '@/lib'

import StatCard from './components/stat-card'

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

const navLink = [
  {
    to: '/application',
    title: 'All Applications (3)',
  },
  {
    to: '/application/processing',
    title: 'Processing (1)',
  },
  {
    to: '/application/pending',
    title: 'Pending (1)',
  },
  {
    to: '/application/completed',
    title: 'Completed (1)',
  },
]

const Application = () => {
  const tabBaseClass = 'px-4 py-2 rounded-sm text-sm font-medium transition'
  const activeClass = 'bg-white shadow text-black'
  const inactiveClass = 'text-gray-500 hover:text-black'

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-[1250px] mx-auto space-y-8">
        {/* ===== Header ===== */}
        <div>
          <h1 className="text-2xl font-bold">Application Progress</h1>
          <p className="text-gray-500 text-sm">
            Track the progress of your knowledge graph applications
          </p>
        </div>

        {/* ===== Stats ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {statData.map((stat, index) => (
            <StatCard stat={stat} key={index} />
          ))}
        </div>

        {/* ===== Tabs (ROUTING BASED) ===== */}
        <div className="flex gap-2 bg-gray-100 p-1 rounded-sm w-fit">
          {navLink.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.to}
              className={({ isActive }) =>
                cn(tabBaseClass, isActive ? activeClass : inactiveClass)
              }
            >
              {nav.title}
            </NavLink>
          ))}
        </div>

        <Outlet />
      </div>
    </div>
  )
}

export default Application
