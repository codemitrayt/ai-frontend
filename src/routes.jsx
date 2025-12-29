import { BrowserRouter, Routes, Route } from 'react-router'

import {
  AppLayout,
  AuthLayout,
  RBACPage,
  BuilderPage,
  ModelManagementPage,
} from './pages'
import { HomePage, NotFoundPage, SignInPage, SignUpPage } from './pages'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
          </Route>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="test" element={<RBACPage />} />
          <Route path="builder" element={<BuilderPage />} />
          <Route path="model" element={<ModelManagementPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
