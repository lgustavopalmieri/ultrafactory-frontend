import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import Home from "./features/home/Home"

function AppRoutes() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
      </Route>,
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
