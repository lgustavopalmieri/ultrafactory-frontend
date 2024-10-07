import axios, { InternalAxiosRequestConfig } from "axios"
import { ACCOUNTS_HOST } from "./constants/accounts"

const accountsApi = axios.create({
  baseURL: `${ACCOUNTS_HOST}`,
})

accountsApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config
})

export default accountsApi
