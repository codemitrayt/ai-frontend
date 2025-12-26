import {
  CheckCircle,
  Database,
  Cloud,
  AlertCircle,
  Globe,
  Settings,
} from "lucide-react"

const sourceCards = [
  {
    id: 1,
    title: "Production PostgreSQL",
    type: "Database",
    status: "Connected",
    icon: Database,
    statusIcon: CheckCircle,
    settingIcon:Settings
  },
  {
    id: 2,
    title: "Salesforce CRM",
    type: "CRM",
    status: "Connected",
    icon: Cloud,
    statusIcon: CheckCircle,
    settingIcon:Settings
  },
  {
    id: 3,
    title: "Orders API",
    type: "API",
    status: "Error",
    icon: Globe,
    statusIcon: AlertCircle,
    settingIcon:Settings
  },
]

const statusStyle = {
  Connected: "bg-green-100 text-green-700",
  Error: "bg-red-100 text-red-700",
}

const ConnectedSources = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sourceCards.map((item) => {
        const Icon = item.icon
        const StatusIcon = item.statusIcon
        const Setting = item.settingIcon

        return (
          <div
            key={item.id}
            className="bg-white border rounded-xl p-6 flex justify-between hover:shadow-md transition"
          >
            <div className="flex gap-4">
              <Icon className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <span className="inline-block mt-1 text-[12px] bg-gray-100 px-3 py-1 rounded-full">
                  {item.type}
                </span>
                <div className="mt-4">
                  <span
                    className={`font-semibold px-3 py-1 rounded-full text-[11px] ${statusStyle[item.status]}`}
                  >
                    {item.status}
                  </span>
                 
                </div>
              </div>
            </div>

           <div>

              <StatusIcon
              className={`w-5 h-5 ${
                item.status === "Connected"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            />
        <Setting className="w-5 h-5 mt-10 text-gray-600 " />
           </div>
          
          </div>
        )
      })}
    </div>
  )
}

export default ConnectedSources
