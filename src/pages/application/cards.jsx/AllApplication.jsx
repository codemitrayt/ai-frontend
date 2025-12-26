import { useNavigate } from "react-router-dom"

const applicationData = [
  {
    id: "customer-analytics",
    title: "Customer Analytics KG",
    team: "Analytics Team",
    date: "2024-01-15",
    status: "processing",
    progress: 65,
    records: "12,500 / 19,200",
    time: "2h 15m remaining",
    sources: ["PostgreSQL", "Salesforce", "CSV Files"],
  },
  {
    id: "product-catalog",
    title: "Product Catalog Graph",
    team: "Product Team",
    date: "2024-01-10",
    status: "completed",
    progress: 100,
    records: "8,900 / 8,900",
    time: "Completed",
    sources: ["MongoDB", "REST API", "JSON Files"],
  },
  {
    id: "supply-chain",
    title: "Supply Chain Network",
    team: "Operations Team",
    date: "2024-01-20",
    status: "pending",
    progress: 0,
    records: "0 / 15,600",
    time: "Not started",
    sources: ["Oracle DB", "XML Files"],
  },
]

const ApplicationRow2 = () => {
  const navigate = useNavigate()

  const statusStyle = {
    processing: "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
  }

  return (
    <div className="space-y-4">
      {applicationData.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/application/${item.id}`)}
          className="bg-white border rounded-sm p-6 space-y-5 cursor-pointer hover:shadow transition"
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-[13px] text-gray-500">
                {item.team} · {item.date}
              </p>
            </div>

            <span
              className={`px-3 rounded-full text-[12px] font-medium ${statusStyle[item.status]}`}
            >
              {item.status}
            </span>
          </div>

          {/* Progress */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-black">Progress</span>
              <span className="font-medium">{item.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-black h-2 rounded-full"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>

          {/* Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-gray-500 mb-1">Data Sources</p>
              <div className="flex flex-wrap gap-2">
                {item.sources.map((src) => (
                  <span
                    key={src}
                    className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {src}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-1">Records Processed</p>
              <p className="font-medium">{item.records}</p>
            </div>

            <div>
              <p className="text-gray-500 mb-1">Estimated Time</p>
              <p className="font-medium">{item.time}</p>
            </div>
          </div>

          {/* Actions */}
          {item.status === "processing" && (
            <div
              className="flex gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100">
                ⏸ Pause
              </button>
              <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100">
                View Logs
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ApplicationRow2
