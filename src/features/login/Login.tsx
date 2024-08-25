import { useKeycloak } from "@react-keycloak/web"
import * as React from "react"
import { Navigate, useLocation } from "react-router-dom"

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = props => {
  const location = useLocation()
  const currentLocationState = location.state || { from: { pathname: "/home" } }
  const { keycloak } = useKeycloak()
  const login = React.useCallback(() => {
    keycloak?.login()
  }, [keycloak])

  if (keycloak?.authenticated) {
    console.log("Redirecionando para:", currentLocationState?.from as string)

    return <Navigate to={currentLocationState?.from as string} />
  }
  return (
    <div>
      <button type="button" onClick={login}>
        Login
      </button>
    </div>
  )
}

export default Login
