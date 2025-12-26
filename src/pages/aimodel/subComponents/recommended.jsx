import { Star, Brain, Image as ImageIcon, Zap, Clock } from 'lucide-react'

// eslint-disable-next-line react-refresh/only-export-components
export const modelCards = [
  {
    icon: Brain,
    title: 'GPT-4 Turbo',
    provider: 'OpenAI',
    description:
      'State-of-the-art language model for complex text extraction and entity recognition',
    speed: 'medium',
    accuracy: 'high accuracy',
    price: '$0.01/1K tokens',
    tags: [
      'Named Entity Recognition',
      'Relationship Extraction',
      'Document Analysis',
      '+1 more',
    ],
  },
  {
    icon: Brain,
    title: 'Gemini Pro',
    provider: 'Google',
    description: 'Multimodal model for text, image, and code analysis',
    speed: 'fast',
    accuracy: 'high accuracy',
    price: '$0.0005/1K tokens',
    tags: [
      'Multimodal Extraction',
      'Image Analysis',
      'Code Understanding',
      '+1 more',
    ],
  },
  {
    icon: ImageIcon,
    title: 'GPT-4 Vision',
    provider: 'OpenAI',
    description:
      'Multimodal model for extracting information from images and documents',
    speed: 'medium',
    accuracy: 'high accuracy',
    price: '$0.01/1K tokens + $0.765/image',
    tags: ['OCR', 'Document Analysis', 'Image Understanding', '+1 more'],
  },
]

const Recommended = () => {
  return (
    <div className="w-[1250px] mx-auto mt-8">
      {/* Header */}
      <div className="bg-white rounded-sm border border-slate-200 p-6 space-y-1">

        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500" />
          <h2 className="text-xl font-semibold text-slate-900">
            Top Recommendations
          </h2>
        </div>
        <p className="text-slate-500 text-sm">
          Best performing models for knowledge graph data extraction across
          different use cases
        </p>




         {/* Cards */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* GPT-4 Turbo */}
        {modelCards.map((card, index) => {
          const Icon = card.icon

          return (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-md p-3 space-y-4"
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <Icon className="w-7 h-7 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-500">{card.provider}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-end">
                  <span className="text-xs bg-slate-100 px-3 py-1 rounded-full font-medium">
                    Recommended
                  </span>
                  <span className="text-xs border px-3 py-1 rounded-full">
                    LLM
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600">{card.description}</p>

              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1 text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                  <Clock className="w-3 h-3" /> {card.speed}
                </span>

                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  {card.accuracy}
                </span>
              </div>

              <p className="text-sm font-medium">{card.price}</p>

              <div className="space-y-1">
                <p className="text-sm font-medium">Use Cases:</p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs border px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full mt-2 bg-slate-900 text-white py-2 text-sm rounded-sm hover:bg-slate-800 transition">
                Configure Model
              </button>
            </div>
          )
        })}
      </div>



      </div>

     
    </div>
  )
}

export default Recommended
