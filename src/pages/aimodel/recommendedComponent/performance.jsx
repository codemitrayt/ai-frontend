import { CheckCircle, DollarSign, Zap } from 'lucide-react';
import React from 'react'

const comparisonData = [
  {
    id: "speed",
    title: "Speed Comparison",
    icon: Zap,
    items: [
      {
        name: "spaCy Large",
        score: 95,
        desc: "Fastest for NER tasks",
      },
      {
        name: "Gemini Pro",
        score: 90,
        desc: "Fast API responses",
      },
      {
        name: "All-MiniLM",
        score: 98,
        desc: "Lightweight embeddings",
      },
      {
        name: "GPT-4 Turbo",
        score: 70,
        desc: "Moderate speed",
      },
    ],
  },
  {
    id: "accuracy",
    title: "Accuracy Comparison",
    icon: CheckCircle,
    items: [
      {
        name: "GPT-4 Turbo",
        score: 95,
        desc: "Highest accuracy for complex tasks",
      },
      {
        name: "Claude 3.5 Sonnet",
        score: 93,
        desc: "Excellent reasoning",
      },
      {
        name: "GPT-4 Vision",
        score: 90,
        desc: "Best multimodal accuracy",
      },
      {
        name: "LayoutLM v3",
        score: 88,
        desc: "Document-specific accuracy",
      },
    ],
  },
  {
  id: "cost-efficiency",
  title: "Cost Efficiency Comparison",
  icon: DollarSign,
  items: [
    {
      name: "spaCy Large",
      score: 100,
      desc: "Free and open source",
    },
    {
      name: "All-MiniLM",
      score: 100,
      desc: "Free embeddings",
    },
    {
      name: "Gemini Pro",
      score: 95,
      desc: "Very cost effective",
    },
    {
      name: "GPT-4 Turbo",
      score: 60,
      desc: "Premium pricing",
    },
  ],
}
];

const PerformanceComparison = () => {
  return (
     <div className="w-[1250px] m-auto space-y-7 mt-7">
      {comparisonData.map((section) => {
        const Icon = section.icon;

        return (
          <div
            key={section.id}
            className="rounded-xl border border-gray-200 bg-white p-6"
          >
            {/* Header */}
            <div className="mb-6 flex items-center gap-3">
              <Icon className="h-5 w-5 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900">
                {section.title}
              </h2>
            </div>

            {/* Bars */}
            <div className="space-y-6">
              {section.items.map((item, index) => (
                <div key={index}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="font-medium text-md text-gray-900">
                      {item.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {item.score}/100
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-blue-600 transition-all"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>

                  <p className="mt-1 text-[13px] text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default PerformanceComparison