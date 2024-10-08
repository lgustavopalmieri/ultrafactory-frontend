import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom"
import Home from "./features/home/Home"
import Layout from "./components/Layout/Layout"
import InitialPage from "./features/initial-page/InitialPage"

function AppRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<InitialPage />} />
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
