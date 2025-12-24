import { useNavigate } from "react-router-dom"

const ApplicationRow2 = ({
  id,
  title,
  team,
  date,
  status,
  progress,
  records,
  time,
  sources,
}) => {
  const navigate = useNavigate()

  const statusStyle = {
    processing: "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
  }

  return (
    <div
      onClick={() => navigate(`/application/${id}`)}
      className="bg-white border rounded-sm p-6 space-y-5 cursor-pointer hover:shadow transition"
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-[13px] text-gray-500">
            {team} · {date}
          </p>
        </div>

        <span
          className={`px-3 rounded-full text-[12px] font-medium ${statusStyle[status]}`}
        >
          {status}
        </span>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span className="text-black">Progress</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-black h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="text-gray-500 mb-1">Data Sources</p>
          <div className="flex flex-wrap gap-2">
            {sources.map((src) => (
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
          <p className="font-medium">{records}</p>
        </div>

        <div>
          <p className="text-gray-500 mb-1">Estimated Time</p>
          <p className="font-medium">{time}</p>
        </div>
      </div>

      {/* Actions */}
      {status === "processing" && (
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
  )
}

export default ApplicationRow2
