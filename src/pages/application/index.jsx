import { CheckCircle, Database, TrendingUp, Triangle } from "lucide-react"
import { Outlet, useNavigate, useLocation } from "react-router-dom"

// ================= DATA =================

const statData = [
  {
    title: "Total Records",
    value: "43700",
    subTitle: "Across all applications",
    icon: Database,
  },
  {
    title: "Processed",
    value: "21400",
    subTitle: "Records processed",
    icon: TrendingUp,
  },
  {
    title: "Active Jobs",
    value: "1",
    subTitle: "Currently processing",
    icon: Triangle,
  },
  {
    title: "Completion Rate",
    value: "33",
    subTitle: "Applications completed",
    icon: CheckCircle,
  },
]

const navLink = [
  { to: "/application", label: "All Applications (3)" },
  { to: "/application/processing", label: "Processing (1)" },
  { to: "/application/pending", label: "Pending (1)" },
  { to: "/application/completed", label: "Completed (1)" },
]

// ================= COMPONENT =================

const Application = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

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

        {/* ===== Stats Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {statData.map((stat, index) => {
            const { icon: Icon } = stat

            return (
              <div
                key={index}
                className="bg-white border rounded-sm p-6"
              >
                <div className="flex justify-between">
                  <p className="text-black text-sm">{stat.title}</p>
                  {Icon && <Icon className="w-4 h-4 text-gray-600" />}
                </div>

                <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                <p className="text-gray-400 text-[12px] mt-1">
                  {stat.subTitle}
                </p>
              </div>
            )
          })}
        </div>

        {/* ===== Tabs (Routing Based) ===== */}
        <div className="flex gap-2 bg-gray-100 text-sm p-1 rounded-sm w-fit">
          {navLink.map((item) => (
            <button
              key={item.to}
              onClick={() => navigate(item.to)}
              className={`px-4 py-2 rounded-sm transition ${
                isActive(item.to)
                  ? "bg-white font-medium shadow"
                  : "text-gray-500"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* ===== Nested Routes Render Here ===== */}
        <Outlet />

      </div>
    </div>
  )
}

export default Application
