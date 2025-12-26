import React from "react";
import { Brain, Cpu, Database, File, FileText } from "lucide-react";

const ByTypeData = [
  {
    sectionTitle: "LLM Models",
    sectionDesc:
      "Large Language Models for complex text understanding and generation",
    cards: [
      {
        id: 1,
        icon: Brain,
        title: "GPT-4 Turbo",
        provider: "OpenAI",
        description:
          "State-of-the-art language model for complex text extraction and entity recognition",
        badge: "medium",
        badgeColor: "bg-gray-900",
        price: "$0.01/1K tokens",
      },
      {
        id: 2,
        icon: Brain,
        title: "Claude 3.5 Sonnet",
        provider: "Anthropic",
        description:
          "Advanced reasoning model excellent for complex document analysis and extraction",
        badge: "medium",
        badgeColor: "bg-gray-900",
        price: "$0.015/1K tokens",
      },
      {
        id: 3,
        icon: Brain,
        title: "Gemini Pro",
        provider: "Google",
        description:
          "Multimodal model for text, image, and code analysis",
        badge: "fast",
        badgeColor: "bg-black",
        price: "$0.0005/1K tokens",
      },
    ],
  },
  {
    sectionTitle: "NLP Models",
    sectionDesc:
      "Traditional NLP models for named entity recognition and text processing",
    cards: [
      {
        id: 4,
        icon: FileText,
        title: "spaCy Large",
        provider: "spaCy",
        description:
          "Industrial-strength NLP pipeline for named entity recognition and dependency parsing",
        badge: "fast",
        badgeColor: "bg-black",
        price: "Free",
      },
    ],
  },
    {
    sectionTitle: "Vision-Language Models",
    sectionDesc:
      "Multimodal models that understand both text and images",
    cards: [
      {
        id: 1,
        icon: "image",
        title: "GPT-4 Vision",
        provider: "OpenAI",
        description:
          "Multimodal model for extracting information from images and documents",
        badge: "medium",
        badgeColor: "bg-gray-900",
        price: "$0.01/1K tokens + $0.765/image",
      },
    ],
  },


    {
    sectionTitle: "Embedding Models",
    sectionDesc:
      "Models that convert text into numerical representations for similarity",
    cards: [
      {
        id: 2,
        icon: Database,
        title: "OpenAI Embeddings v3",
        provider: "OpenAI",
        description:
          "High-quality text embeddings for semantic understanding and similarity",
        badge: "fast",
        badgeColor: "bg-black",
        price: "$0.00013/1K tokens",
      },
      {
        id: 3,
        icon: Database,
        title: "All-MiniLM-L6-v2",
        provider: "Sentence Transformers",
        description:
          "Lightweight but powerful sentence embedding model",
        badge: "fast",
        badgeColor: "bg-black",
        price: "Free",
      },
    ],
  },

    {
    sectionTitle: "Document AI Models",
    sectionDesc:
      "Specialized models for document structure understanding",
    cards: [
      {
        id: 1,
        icon: FileText,
        title: "LayoutLM v3",
        provider: "Microsoft",
        description:
          "Multimodal model understanding text, layout, and visual information in documents",
        badge: "medium",
        badgeColor: "bg-gray-900",
        price: "Free (Self-hosted)",
      },
    ],
  },
];

const ByType = () => {
  return (
    <div className="w-[1250px] m-auto space-y-6 py-10">
      {ByTypeData.map((section, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl p-5"
        >
          {/* Section Header */}
          <h2 className="text-lg font-semibold text-gray-900">
            {section.sectionTitle}
          </h2>
          <p className="text-gray-500 mt-1 text-[14px]">
            {section.sectionDesc}
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {section.cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="border border-gray-200 rounded-xl p-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4  text-gray-800" />
                      <div>
                        <h3 className="font-semibold text-sm text-gray-900">
                          {card.title}
                        </h3>
                        <p className="text-[13px] text-gray-500">
                          {card.provider}
                        </p>
                      </div>
                    </div>

                    <p className="text-[12px] text-gray-600 mt-4">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs text-white px-3 py-1 rounded-full ${card.badgeColor}`}
                      >
                        {card.badge}
                      </span>
                      <span className="text-[12px] font-medium text-gray-900">
                        {card.price}
                      </span>
                    </div>

                    <button className="w-full bg-black text-sm text-white py-1.5 rounded-sm font-medium hover:bg-gray-800 transition">
                      Configure
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ByType;
