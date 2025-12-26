import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components2/Navbar"

// Top-level pages
import RBACTeam from "./Pages2/RBACTeam"
import AppBuilder from "./Pages2/AppBuilder"
// App pages (barrel export from ./pages)
import {
  Overview,
  Application,
  AllApplication,
  Pending,
  Completed,
  Processing,
  DataSource,
  ConnectedSources,
  AvailableSources,
  Configuration,
  AiModel,
  ModelSelection,
  Recommendation,
  AllModels,
  ByType,
  Configurations,
  Recommended,
  BestPractices,
  PerformanceComparison,
  ByUseCase,
  
} from "./pages"

const Approutes = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* ================= HOME ================= */}
        <Route path="/" element={<Overview />} />
        <Route path="/appbuilder" element={<AppBuilder/>}/>
        <Route path="/rbacteam" element={<RBACTeam/>}/>

        {/* ================= APPLICATION ================= */}
        <Route path="/application" element={<Application />}>
          {/* Default tab */}
          <Route index element={<AllApplication />} />

          {/* Tabs */}
          <Route path="pending" element={<Pending />} />
          <Route path="completed" element={<Completed />} />
          <Route path="processing" element={<Processing />} />
        </Route>

        {/* ================= AiModel ================= */}
      <Route path="/aimodel" element={<AiModel/>}>

        {/*=================== ModelSelectionSubRoutes ================= */}

      <Route path="model" element={<ModelSelection/>}>
        <Route index element={<Recommended/>}/>
        <Route path="allmodels" element={<AllModels/>}/>
        <Route path="bytype" element={<ByType/>}/>
        <Route path="configuration" element={<Configurations/>}/>
       
      </Route>

 {/* ================= Recommendation Routes ================= */}

        <Route path="recommendation" element={<Recommendation/>} >
          <Route index element={<ByUseCase/>}/>
         <Route path="bestpractice" element={<BestPractices/>}/>
         <Route path="performance" element={<PerformanceComparison/>}/>
         
        </Route>

        
        
      </Route>
      

        {/* ================= DATASOURCES ================= */}
        <Route path="/datasources" element={<DataSource />}>
          {/* Default tab */}
          <Route index element={<ConnectedSources />} />

          <Route path="available" element={<AvailableSources />} />
          <Route path="configuration" element={<Configuration />} />
        </Route>

       
      



      </Routes>
    </BrowserRouter>
  )
}

export default Approutes
