import {
  FileText,
  Database,
  Info,
  Globe,
  Code,
  Image,
} from "lucide-react";

const useCaseData = [
  {
    id: "text",
    title: "Text Documents & PDFs",
    description:
      "Extract entities and relationships from unstructured text documents",
    icon: FileText,
    models: [
      {
        name: "GPT-4 Turbo",
        rank: "#1",
        desc: "Excellent at understanding context and extracting complex relationships",
        setup:
          "Primary extraction + GPT-4 Vision for scanned docs",
      },
      {
        name: "Claude 3.5 Sonnet",
        rank: "#2",
        desc: "Superior long-context understanding for large documents",
        setup:
          "Alternative to GPT-4 with better reasoning capabilities",
      },
      {
        name: "Azure Document Intelligence",
        rank: "#3",
        desc: "Specialized OCR and document structure understanding",
        setup:
          "Pre-processing for scanned documents and forms",
      },
    ],
    pipeline:
      "Document Intelligence → GPT-4 Turbo → spaCy NER (validation)",
  },
  {
    id: "structured",
    title: "Structured Data (SQL/APIs)",
    description:
      "Extract schema, relationships, and semantic meaning from databases",
    icon: Database,
    models: [
      {
        name: "GPT-4 Turbo",
        rank: "#1",
        desc: "Can understand complex SQL schemas and generate relationships",
        setup:
          "Schema analysis + relationship inference",
      },
      {
        name: "Gemini Pro",
        rank: "#2",
        desc: "Cost-effective for large-scale structured data processing",
        setup:
          "Batch processing with JSON mode",
      },
    ],
    pipeline:
      "Schema Analysis → GPT-4 Turbo → Embedding Model → Neo4j",
  },
   {
    id: "images-documents",
    title: "Images & Scanned Documents",
    description:
      "OCR and visual information extraction from images",
    icon: Image,
    models: [
      {
        name: "GPT-4 Vision",
        rank: "#1",
        desc: "Best-in-class multimodal understanding",
        setup: "Primary OCR + entity extraction",
      },
      {
        name: "LayoutLM v3",
        rank: "#2",
        desc: "Specialized document layout understanding",
        setup: "Document structure analysis",
      },
      {
        name: "Table Transformer",
        rank: "#3",
        desc: "Specialized table detection and extraction",
        setup: "Table-specific processing",
      },
    ],
    pipeline:
      "GPT-4 Vision → LayoutLM v3 → Table Transformer → Text Processing",
  },

  {
  id: "code-repositories",
  title: "Code Repositories",
  description:
    "Extract software architecture, dependencies, and relationships",
  icon: Code,
  models: [
    {
      name: "Claude 3.5 Sonnet",
      rank: "#1",
      desc: "Excellent code understanding and analysis",
      setup: "Code analysis + dependency mapping",
    },
    {
      name: "Gemini Pro",
      rank: "#2",
      desc: "Multi-language code support",
      setup: "Repository-wide analysis",
    },
  ],
  pipeline:
    "Code Parsing → Claude 3.5 Sonnet → Dependency Analysis → Graph Construction",
},

  {
    id: "web-content",
    title: "Web Content & APIs",
    description:
      "Extract information from web pages, APIs, and online sources",
    icon: Globe,
    models: [
      {
        name: "GPT-4 Turbo",
        rank: "#1",
        desc: "Handles HTML, JSON, and mixed content formats",
        setup: "Content parsing + entity extraction",
      },
      {
        name: "spaCy Large",
        rank: "#2",
        desc: "Fast processing for high-volume web scraping",
        setup: "Real-time entity recognition",
      },
    ],
    pipeline:
      "Web Scraping → Content Cleaning → GPT-4 Turbo → Validation",
  },
];

const ByUseCase = () => {
  return (
    <div className="w-[1250px] m-auto space-y-8 py-10">
      {useCaseData.map((useCase) => {
        const Icon = useCase.icon;

        return (
          <div
            key={useCase.id}
            className="bg-white border rounded-xl p-4 space-y-6"
          >
            {/* Header */}
            <div className="flex gap-3 items-start">
              <Icon className="w-4 h-4 text-blue-600 mt-1" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {useCase.title}
                </h2>
                <p className="text-gray-500 text-[13px]">
                  {useCase.description}
                </p>
              </div>
            </div>

            {/* Model Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCase.models.map((model, idx) => (
                <div
                  key={idx}
                  className="border rounded-sm p-4 space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-[15px] text-gray-900">
                      {model.name}
                    </h3>
                    <span className="text-[12px] font-medium bg-gray-100 px-2 py-1 rounded-full">
                      {model.rank}
                    </span>
                  </div>

                  <p className="text-gray-600 text-[13px]">
                    {model.desc}
                  </p>

                  <p className="text-[13px] text-gray-500">
                    <span className="font-medium text-gray-700">
                      Setup:
                    </span>{" "}
                    {model.setup}
                  </p>
                </div>
              ))}
            </div>

            {/* Recommended Pipeline */}
            <div className="flex gap-3 items-start bg-blue-50 border border-blue-100 rounded-lg p-3">
              <Info className="w-4 h-4 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-sm text-blue-800">
                  Recommended Pipeline:
                </p>
                <p className="text-blue-700 text-[14px]">
                  {useCase.pipeline}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ByUseCase;
