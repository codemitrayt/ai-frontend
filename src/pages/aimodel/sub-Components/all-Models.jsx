import React from "react";
import { Clock, CheckCircle } from "lucide-react";

// modelsData.js (recommended) OR keep in same file
import {
  Brain,
  Image as ImageIcon,
  FileText,
  Database,
} from "lucide-react";
// eslint-disable-next-line react-refresh/only-export-components
export const recommendedCards = [
  {
    icon: Brain,
    title: "GPT-4 Turbo",
    provider: "OpenAI",
    description:
      "State-of-the-art language model for complex text extraction and entity recognition",
    speed: "medium",
    accuracy: "high",
    price: "$0.01/1K tokens",
    badges: ["Popular", "Recommended"],
  },
  {
    icon: Brain,
    title: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    description:
      "Advanced reasoning model excellent for complex document analysis and extraction",
    speed: "medium",
    accuracy: "high",
    price: "$0.015/1K tokens",
    badges: ["Popular"],
  },
  {
    icon: Brain,
    title: "Gemini Pro",
    provider: "Google",
    description:
      "Multimodal model for text, image, and code analysis",
    speed: "fast",
    accuracy: "high",
    price: "$0.0005/1K tokens",
    badges: ["Recommended"],
  },
  {
    icon: FileText,
    title: "spaCy Large",
    provider: "spaCy",
    description:
      "Industrial-strength NLP pipeline for named entity recognition and parsing",
    speed: "fast",
    accuracy: "high",
    price: "Free",
    badges: ["Popular"],
  },
  {
    icon: Brain,
    title: "Transformer NER",
    provider: "Hugging Face",
    description:
      "BERT-based model fine-tuned for named entity recognition",
    speed: "fast",
    accuracy: "high",
    price: "Free",
    badges: [],
  },
  {
    icon: ImageIcon,
    title: "GPT-4 Vision",
    provider: "OpenAI",
    description:
      "Multimodal model for extracting information from images and documents",
    speed: "medium",
    accuracy: "high",
    price: "$0.01/1K tokens + $0.765/image",
    badges: ["Recommended"],
  },
  {
    icon: ImageIcon,
    title: "Azure Document Intelligence",
    provider: "Microsoft",
    description:
      "Specialized OCR and document analysis service",
    speed: "medium",
    accuracy: "high",
    price: "$1.50/1K pages",
    badges: [],
  },
  {
    icon: Database,
    title: "OpenAI Embeddings v3",
    provider: "OpenAI",
    description:
      "High-quality text embeddings for semantic understanding",
    speed: "fast",
    accuracy: "high",
    price: "$0.00013/1K tokens",
    badges: [],
  },
  {
    icon: Database,
    title: "All-MiniLM-L6-v2",
    provider: "Sentence Transformers",
    description:
      "Lightweight but powerful sentence embedding model",
    speed: "fast",
    accuracy: "medium",
    price: "Free",
    badges: [],
  },
];



const AllModels = () => {
  return (
    <div className="max-w-[1250px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {recommendedCards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-sm p-3 flex flex-col justify-between shadow-sm"
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <Icon className="w-4 h-4 text-slate-700" />
                <div>
                  <h3 className="font-semibold text-[16px] text-slate-900">
                    {card.title}
                  </h3>
                  <p className="text-[12px] text-slate-500">
                    {card.provider}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-end">
                {card.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="text-[12px] bg-slate-100 px-3 py-1 rounded-full font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-[12px] text-slate-600 mt-4">
              {card.description}
            </p>

            {/* Speed & Accuracy */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-[12px] bg-black text-white px-3 py-1 rounded-full capitalize">
                {card.speed}
              </span>

              <span className="text-[12px] bg-black text-white px-3 py-1 rounded-full capitalize">
                {card.accuracy}
              </span>
            </div>

            {/* Price */}
            <p className="text-[11px] font-medium mt-4">
              $ {card.price}
            </p>

            {/* Button */}
            <button className="mt-4 w-full  bg-black text-white py-1.5 text-sm rounded-sm hover:opacity-90 transition">
              Configure
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllModels;
