import Keycloak from "keycloak-js"

const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
}
const keycloak = new Keycloak(keycloakConfig)

export const onKeycloakEvent = (eventType: string) => {
  const errorEvents = ["onAuthError", "onAuthLogout", "onAuthRefreshError"]
  if (!errorEvents.includes(eventType)) return
  keycloak.login()
}

export default keycloak
