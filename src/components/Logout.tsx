import { useKeycloak } from "@react-keycloak/web"
import * as React from "react"

interface ILogoutProps {}

const Logout: React.FunctionComponent<ILogoutProps> = props => {
  const { keycloak } = useKeycloak()
  return (
    <div>
      {/* <div>{`User is ${
        !keycloak.authenticated ? "NOT " : ""
      }authenticated`}</div> */}

      {!!keycloak.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}
    </div>
  )
}

export default Logout
