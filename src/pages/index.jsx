// ================= HOME / AUTH =================
import HomePage from "./home"
import SignInPage from "./auth/sign-in"
import SignUpPage from "./auth/sign-up"
import NotFoundPage from "./not-found"

// ================= APPLICATION =================
import Overview from "./overview"
import Application from "./application"

// Application tabs (⚠️ cards.jsx folder + singular filename)
import AllApplication from "./application/components.jsx/All-Application"
import Pending from "./application/components.jsx/Pending"
import Completed from "./application/components.jsx/Completed"
import Processing from "./application/components.jsx/Processing"

// ================= DATASOURCE =================
import DataSource from "./data-source"
import ConnectedSources from "./data-source/components/Connected-Sources"
import AvailableSources from "./data-source/components/Available-Source"
import Configuration from "./data-source/components/Configuration"

// ================= LAYOUTS =================
import AppLayout from "./layout"
import AuthLayout from "./auth/layout"

//================= AiModel =================
import AiModel from "./aimodel"
import ModelSelection from "./aimodel/components/modelSelection"
import Recommendation from "./aimodel/components/recommendation"

//================ModelSelectionComponent==============
import AllModels from "./aimodel/sub-Components/all-Models"
import ByType from "./aimodel/sub-Components/by-Type"
import Configurations from "./aimodel/sub-Components/configuration"
import Recommended from "./aimodel/sub-Components/recommended"


//================RecommendedComponents==============
import BestPractices from "./aimodel/recommended-Component/best-Practice"
import ByUseCase from "./aimodel/recommended-Component/by-UseCase"
import PerformanceComparison from "./aimodel/recommended-Component/performance"
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
