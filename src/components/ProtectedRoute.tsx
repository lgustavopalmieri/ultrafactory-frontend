import { useKeycloak } from "@react-keycloak/web"
import * as React from "react"
import { Navigate } from "react-router-dom"

interface IProtectedRouteProps {
  children: React.ReactElement<{ userRoles: string[] }>
}

const ProtectedRoute: React.FunctionComponent<IProtectedRouteProps> = ({
  children,
}) => {
  const { keycloak, initialized } = useKeycloak()

  if (!initialized) {
    return <div>Carregando...</div>
  }

  if (!keycloak.authenticated) {
    return <Navigate to="/login" />
  }

  const userRoles = keycloak.tokenParsed?.realm_access?.roles || []

  console.log("User Roles inside ProtectedRoute:", userRoles)

  return React.cloneElement(children, { userRoles })
}

export default ProtectedRoute
