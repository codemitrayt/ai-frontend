import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components2/Navbar'

import Applications from './Pages2/Applications'
import DataSources from './Pages2/DataSources'
import RBACTeam from './Pages2/RBACTeam'
import AppBuilder from './Pages2/AppBuilder'
import AiModels from './Pages2/AiModels'
import ApplicationDetails from './Pages2/ApplicationDetails'

import AvailableSources from './reuseComponent/DataSourceComponents/AvailableSources'
import Configuration from './reuseComponent/DataSourceComponents/Configuration'
import ConnectedSources from './reuseComponent/DataSourceComponents/ConnectedSources'
import Processing from './reuseComponent/subCompoApplication/Processing'
import Completed from './reuseComponent/subCompoApplication/Completed'
import Pending from './reuseComponent/subCompoApplication/Pending'
import AllApplications from './reuseComponent/subCompoApplication/AllApplications'

import { Application, Overview } from '@/pages'

const Approutes = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Overview />} />

        <Route path="/application" element={<Application />}>
          {/* Tabs */}
          <Route index element={<AllApplications />} />
          <Route path="processing" element={<Processing />} />
          <Route path="completed" element={<Completed />} />
          <Route path="pending" element={<Pending />} />

          {/* Details page */}
          <Route path=":appId" element={<ApplicationDetails />} />
        </Route>

        <Route path="/rbacteam" element={<RBACTeam />} />
        <Route path="/appbuilder" element={<AppBuilder />} />
        <Route path="/aimodel" element={<AiModels />} />

        <Route path="/datasources" element={<DataSources />}>
          <Route index element={<ConnectedSources />} />
          <Route path="available" element={<AvailableSources />} />
          <Route path="configuration" element={<Configuration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Approutes
