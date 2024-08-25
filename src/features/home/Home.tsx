import * as React from "react"
import Logout from "../../components/Logout"
import { useKeycloak } from "@react-keycloak/web"
import { jwtDecode } from "jwt-decode"

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = props => {
  const { keycloak } = useKeycloak()
  let decodedToken: any = null
  if (keycloak?.token) {
    try {
      decodedToken = jwtDecode(keycloak.token)
    } catch (error) {
      console.error("Token decoding failed:", error)
    }
  }
  const userRoles = keycloak.tokenParsed?.realm_access?.roles || []
  console.log(userRoles)
  //decodedToken.resource_access.ultrafactory-frontend-client.roles.map((role) => role)
  return (
    <div style={{ maxWidth: "100vw" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>Home page</div>
        <Logout />
      </div>
      <div>
        <div>
          {decodedToken
            ? JSON.stringify(decodedToken, null, 2)
            : "No token available"}
        </div>
      </div>
    </div>
  )
}

export default Home
