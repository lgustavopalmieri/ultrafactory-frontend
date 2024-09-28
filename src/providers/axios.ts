import axios, { InternalAxiosRequestConfig } from "axios"
import keycloak from "./KeycloakProvider"

const host = "http://localhost:4000/"

const api = axios.create({
  baseURL: `${host}`,
})

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (keycloak.token) {
    console.log(keycloak.token)
    config.headers.Authorization = `Bearer ${keycloak.token}`
  }
  return config
})

export default api
