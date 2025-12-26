import { AlertCircle } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
const toggleConfig = [
  {
    key: 'parallel',
    label: 'Enable Parallel Processing',
  },
  {
    key: 'fallback',
    label: 'Use Fallback Models',
  },
]

const Configurations = () => {
  const [toggles, setToggles] = useState({
    parallel: false,
    fallback: false,
  })

  return (
    <div className="w-[1250px] m-auto py-10">
      <div className="bg-white border border-gray-200 rounded-md p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            Extraction Pipeline Configuration
          </h1>
          <p className="text-gray-500 mt-1 text-[14px]">
            Configure your data extraction pipeline with multiple models for
            different stages
          </p>
        </div>

        {/* Grid Form */}
        <div className="grid grid-cols-2 gap-6">
          {/* Primary Extraction Model */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Extraction Model
            </label>
            <select className="w-full border rounded-sm px-4 p-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-black">
              <option>Select primary model</option>
            </select>
          </div>

          {/* Batch Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Batch Size
            </label>
            <input
              type="number"
              defaultValue={100}
              className="w-full border rounded-sm text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Named Entity Recognition */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Named Entity Recognition
            </label>
            <select className="w-full border rounded-sm text-sm px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-black">
              <option>Select NER model</option>
            </select>
          </div>

          {/* Max Tokens */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Tokens per Request
            </label>
            <input
              type="number"
              defaultValue={4000}
              className="w-full border rounded-sm text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Document Processing */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Document Processing
            </label>
            <select className="w-full border rounded-sm text-sm px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-black">
              <option>Select document model</option>
            </select>
          </div>

          {/* Temperature */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Temperature (Creativity)
            </label>
            <input
              type="number"
              step="0.1"
              defaultValue={0.1}
              className="w-full border rounded-sm text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Embedding Model */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Embedding Model
            </label>
            <select className="w-full border rounded-sm text-sm px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-black">
              <option>Select embedding model</option>
            </select>
          </div>

          {/* Toggles */}
          <div className="space-y-5 pt-6">
            {toggleConfig.map((item) => {
              const enabled = toggles[item.key]

              return (
                <label
                  key={item.key}
                  className="flex items-center gap-4 cursor-pointer select-none"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setToggles((prev) => ({
                        ...prev,
                        [item.key]: !prev[item.key],
                      }))
                    }
                    className={`relative inline-flex h-6 w-13 items-center rounded-full
            transition-colors duration-300 ease-in-out
            ${enabled ? 'bg-black' : 'bg-gray-300'}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 rounded-full bg-white shadow
              transform transition-transform duration-300 ease-in-out
              ${enabled ? 'translate-x-7' : 'translate-x-1'}`}
                    />
                  </button>

                  <span className=" text-sm font-medium text-gray-900">
                    {item.label}
                  </span>
                </label>
              )
            })}
          </div>
        </div>

        {/* System Prompt */}
        <div>
          <label className="block text-[14px] font-medium text-gray-700 mb-2">
            System Prompt Template
          </label>
          <textarea
            rows={4}
            className="w-full border rounded-sm text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            defaultValue={`You are an expert at extracting structured information from unstructured data. Extract entities, relationships, and properties that would be suitable for a knowledge graph. Focus on accuracy and completeness while maintaining the context and meaning of the original data.`}
          />
        </div>

        {/* Output Schema */}
        <div>
          <label className="block text-[13px] font-medium text-gray-700 mb-2">
            Output Schema (JSON)
          </label>
          <textarea
            rows={6}
            className="w-full font-mono text-[13px] border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            defaultValue={`{
  "entities": [
    {
      "id": "string",
      "type": "string",
      "properties": {}
    }
  ]
}`}
          />
        </div>

        {/* Buttons */}
        <div className="flex text-sm gap-4 pt-4">
          <button className="bg-black text-[13px] text-white px-6 py-2 rounded-sm font-medium hover:bg-gray-800">
            Save Configuration
          </button>
          <button className="border text-[13px] px-6 py-2 rounded-sm font-medium hover:bg-gray-50">
            Test Pipeline
          </button>
          <button className="border text-[13px]  px-6 py-2 rounded-sm font-medium hover:bg-gray-50">
            Export Config
          </button>
        </div>

      </div>

         <div className="w-[1250px] mt-6 m-auto rounded-sm border border-gray-200 bg-white p-6">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-900">
        Configured Models
      </h2>
      <p className="mt-1 text-sm text-gray-600">
        Models currently configured in your extraction pipeline
      </p>

      {/* Empty State */}
      <div className="mt-16 flex  flex-col items-center justify-center text-center">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
          <AlertCircle className="h-5 w-5 text-gray-500" />
        </div>

        <h3 className="text-sm font-medium text-gray-700">
          No models configured yet
        </h3>

        <p className="mt-1 text-gray-500">
          Select models from the tabs above to get started
        </p>
      </div>
    </div>


    </div>
  )
}

export default Configurations
