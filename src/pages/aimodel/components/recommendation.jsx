import { useNavigate, Outlet, useLocation } from 'react-router-dom'

const tabs = [
  { to:"/aimodel/recommendation", label: "By Use Case" },
  { to: "/aimodel/recommendation/performance", label: "Performance Comparison" },
  { to: "/aimodel/recommendation/bestpractice", label: "Best Practices" },
];

const Recommendation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <div className="w-[1250px] m-auto py-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">
          Model Recommendations
        </h1>
        <p className="text-gray-500 mt-1">
          Expert recommendations for different data extraction scenarios
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-6 inline-flex rounded-lg bg-gray-100 p-1">
        {tabs.map((tab) => (
          <button
            key={tab.to}
            onClick={() => navigate(tab.to)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition
              ${
                isActive(tab.to)
                  ? "bg-white text-gray-900 shadow"
                  : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>


    {/* Outlate */}
     <Outlet/>
    </div>
  );
};

export default Recommendation;
