import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import { ReactKeycloakProvider, useKeycloak } from "@react-keycloak/web"
import keycloak from "./providers/KeycloakProvider"
import Login from "./features/login/Login"
import User from "./features/users/User"
import Home from "./features/home/Home"
import Trips from "./features/trips/Trips"

function AppRoutes() {
  const { keycloak } = useKeycloak()
  const userRoles = keycloak.tokenParsed?.realm_access?.roles || []
  console.log("userRoles inside AppRoutes component", userRoles)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/trips" element={<Trips />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <User userRoles={userRoles} />
            </ProtectedRoute>
          }
        />
      </Route>,
    ),
  )

  return <RouterProvider router={router} />
}

const eventLogger = (event: unknown, error: unknown) => {
  console.log("onKeycloakEvent", event, error)
}

function Routes() {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      onEvent={eventLogger}
      initOptions={{
        onload: "login-required",
        pkceMethod: "S256",
      }}
    >
      <AppRoutes />
    </ReactKeycloakProvider>
  )
}

export default Routes
