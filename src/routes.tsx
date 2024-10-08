import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom"
import Home from "./features/home/Home"
import Layout from "./components/Layout/Layout"

function AppRoutes() {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route element={<Layout children={< Outlet/>} data-testid="app" />}>
      <Route path="/" element={<Home />} />
    </Route>
    ),
  )

  return <RouterProvider router={router} />
}

function Routes() {
  return (
    <AppRoutes />
  )
}

export default Routes
