import {
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Clock,
  Image,
  Users,
  Database,
  Zap,
} from "lucide-react";

/* ---------------- BEST PRACTICES DATA ---------------- */

const bestPracticesData = [
  {
    id: "multi-model",
    title: "Multi-Model Pipeline",
    description:
      "Use specialized models for each task in your extraction pipeline",
    example:
      "OCR Model → NER Model → Relationship Extraction → Validation",
    icon: TrendingUp,
  },
  {
    id: "fallback",
    title: "Fallback Strategy",
    description:
      "Configure backup models to handle failures and edge cases",
    example:
      "Primary: GPT-4 → Fallback: Claude-3 → Local: spaCy",
    icon: AlertTriangle,
  },
  {
    id: "cost-optimization",
    title: "Cost Optimization",
    description:
      "Use cheaper models for simple tasks and premium models for complex ones",
    example:
      "spaCy for NER → GPT-4 for complex relationships",
    icon: DollarSign,
  },
  {
    id: "batch-processing",
    title: "Batch Processing",
    description:
      "Process multiple documents together to reduce API costs",
    example:
      "Batch 50–100 documents per API call when possible",
    icon: Clock,
  },
];

/* ---------------- QUICK SETUP GUIDE DATA ---------------- */

const quickSetupData = [
  {
    id: "step-1",
    title: "Step 1: Document Processing",
    description:
      "Use GPT-4 Vision for scanned docs or GPT-4 Turbo for text",
    icon: Image,
  },
  {
    id: "step-2",
    title: "Step 2: Entity Recognition",
    description:
      "Add spaCy for fast NER or use LLM for complex entities",
    icon: Users,
  },
  {
    id: "step-3",
    title: "Step 3: Graph Creation",
    description:
      "Generate embeddings and create Neo4j relationships",
    icon: Database,
  },
];

const  BestPractices = () => {
  return (
    <div className="w-[1250px] m-auto space-y-10 mt-7">

      {/* ================= BEST PRACTICES ================= */}
      <div className="grid grid-cols-2 gap-4">
        {bestPracticesData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="rounded-md border border-gray-200 bg-white p-4"
            >
              <div className="mb-4 flex items-center gap-3">
                <Icon className="h-4 w-4 text-green-600" />
                <h3 className="text-md font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              <p className="mb-4 text-sm text-gray-600">
                {item.description}
              </p>

              <div className="rounded-sm bg-gray-50 px-4 py-3 text-[13px] text-gray-700">
                <span className="font-semibold text-[14px] text-gray-900">
                  Example:
                </span>{" "}
                {item.example}
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= QUICK SETUP GUIDE ================= */}
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900">
          Quick Setup Guide
        </h2>
        <p className="mb-8 text-sm text-gray-600">
          Get started with the most common extraction setup
        </p>

        <div className="grid grid-cols-3 gap-6">
          {quickSetupData.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="rounded-sm border border-gray-200 bg-white p-4 text-center"
              >
                <Icon className="mx-auto mb-4 h-7 w-7 text-blue-600" />

                <h3 className="mb-2 text-sm font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="mb-6 text-[13px] text-gray-600">
                  {step.description}
                </p>

                <button className="rounded-sm border border-gray-300 px-6 py-1 text-sm font-medium text-gray-800 hover:bg-gray-100">
                  Configure
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Button */}
        <div className="mt-8 flex justify-center">
          <button className="flex items-center gap-2 rounded-md bg-black px-6 text-sm py-2 text-white hover:bg-gray-900">
            <Zap className="h-4 w-4" />
            Quick Setup Recommended Pipeline
          </button>
        </div>
      </div>
    </div>
  );
}

export default BestPractices