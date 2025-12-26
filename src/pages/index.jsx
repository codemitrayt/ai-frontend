// ================= HOME / AUTH =================
import HomePage from "./home"
import SignInPage from "./auth/sign-in"
import SignUpPage from "./auth/sign-up"
import NotFoundPage from "./not-found"

// ================= APPLICATION =================
import Overview from "./overview"
import Application from "./application"

// Application tabs (⚠️ cards.jsx folder + singular filename)
import AllApplication from "./application/cards.jsx/AllApplication"
import Pending from "./application/cards.jsx/Pending"
import Completed from "./application/cards.jsx/Completed"
import Processing from "./application/cards.jsx/Processing"

// ================= DATASOURCE =================
import DataSource from "./data-source"
import ConnectedSources from "./data-source/cards/ConnectedSources"
import AvailableSources from "./data-source/cards/AvailableSource"
import Configuration from "./data-source/cards/Configuration"

// ================= LAYOUTS =================
import AppLayout from "./layout"
import AuthLayout from "./auth/layout"

//================= AiModel =================
import AiModel from "./aimodel"
import ModelSelection from "./aimodel/components/modelSelection"
import Recommendation from "./aimodel/components/recommendation"

//================ModelSelectionComponent==============
import AllModels from "./aimodel/subComponents/allModels"
import ByType from "./aimodel/subComponents/byType"
import Configurations from "./aimodel/subComponents/configuration"
import Recommended from "./aimodel/subComponents/recommended"


//================RecommendedComponents==============
import BestPractices from "./aimodel/recommendedComponent/bestPractice"
import ByUseCase from "./aimodel/recommendedComponent/byUseCase"
import PerformanceComparison from "./aimodel/recommendedComponent/performance"
// ================= EXPORTS =================
export {
  HomePage,
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
  Recommendation

  
}

export {
AllModels,
ByType,
Configurations,
Recommended,
BestPractices,
ByUseCase,
PerformanceComparison

}

export { SignInPage, SignUpPage }
export { NotFoundPage }
export { AppLayout, AuthLayout }
