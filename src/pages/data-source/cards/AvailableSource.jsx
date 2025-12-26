import React from "react"
import {
  Database,
  Globe,
  FileText,
  Server,
  Cloud,
} from "lucide-react"

const sources = [
  {
    title: "MongoDB",
    type: "Database",
    description: "NoSQL document database",
    icon: <Database className="w-5 h-5" />,
  },
  {
    title: "MySQL",
    type: "Database",
    description: "Relational database",
    icon: <Database className="w-5 h-5" />,
  },
  {
    title: "Oracle DB",
    type: "Database",
    description: "Enterprise database",
    icon: <Database className="w-5 h-5" />,
  },
  {
    title: "REST API",
    type: "API",
    description: "RESTful web services",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "GraphQL",
    type: "API",
    description: "GraphQL endpoints",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "CSV Files",
    type: "File",
    description: "Comma-separated values",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: "JSON Files",
    type: "File",
    description: "JSON data files",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: "XML Files",
    type: "File",
    description: "XML documents",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: "Apache Kafka",
    type: "Stream",
    description: "Event streaming platform",
    icon: <Server className="w-5 h-5" />,
  },
  {
    title: "Amazon S3",
    type: "Storage",
    description: "Object storage service",
    icon: <Cloud className="w-5 h-5" />,
  },
]

const AvailableSources = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-[25px] font-semibold mb-6">
        Available Sources
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sources.map((source, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition"
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="text-gray-700 w-4 h-4">
                  {source.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-[18px] text-gray-900">
                    {source.title}
                  </h3>
                  <span className="inline-block mt-1 text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    {source.type}
                  </span>
                </div>
              </div>

              <p className="text-[13px] text-gray-500 mt-4">
                {source.description}
              </p>
            </div>

            <button className="mt-6 w-full bg-black text-white py-1 rounded-lg hover:bg-gray-800 transition">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>

    
  )
}

export default AvailableSources