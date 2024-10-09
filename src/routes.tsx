import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom"
import Home from "./features/home/Home"
import Layout from "./components/Layout/Layout"
import CoverPage from "./features/cover-page/CoverPage"
import CreateAccount from "./features/create-account/CreateAccount"

function AppRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<CoverPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route element={<Layout children={<Outlet />} data-testid="app" />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Route>,
    ),
  )

  return <RouterProvider router={router} />
}

function Routes() {
  return <AppRoutes />
}

export default Routes
