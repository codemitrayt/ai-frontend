import { Settings } from "lucide-react";
import { useNavigate, Outlet, useLocation } from 'react-router-dom'

  const modelSelectionPage = [

        {
            to:"/aimodel/model",
            label:"Recommended"
        },
         {
            to: "/aimodel/model/allmodels",
            label:"All Models"
        },
         {
            to: "/aimodel/model/bytype",
            label:"By Type"
        },
         {
            to: "/aimodel/model/configuration",
            label:"Configuration"
        },

    ]
const ModelSelection = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => location.pathname === path
  
  return (
    <div className="w-[1250px] mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-900">
            Data Extraction Models
          </h1>
          <p className="text-slate-500  text-[15px]">
            Choose the best AI models for your data extraction needs
          </p>
        </div>

        {/* Configure Button */}
        <button className="flex items-center gap-2 bg-slate-900 text-white px-4 text-sm py-2 rounded-sm border-2 border-blue-500 shadow focus:outline-none focus:ring-2 focus:ring-blue-500">
          <Settings className="w-4 h-4" />
          Configure Pipeline
        </button>
      </div>

      {/* Tabs */}
   <div className=" w-[500px] p-0.5 bg-gray-100 rounded-sm border-slate-200">
          <div className="flex gap-1 text-sm">
            {modelSelectionPage.map((model, index) => (
              <button
                key={index}
                onClick={() => navigate(model.to)}
                className={`px-4 py-2 text-sm font-medium rounded-[5px] transition
          ${
            isActive(model.to)
              ? " bg-white text-gray-900 shadow"
              : 'text-gray-500 hover:text-gray-700'
          }`}
              >
                {model.label}
              </button>
            ))}
          </div>
     </div>

 
    {/* Outlate */}
     <Outlet/>
  

    </div>



  );
};

export default ModelSelection;
