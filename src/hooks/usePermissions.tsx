import { useMemo } from "react"

interface Permission {
  resource_access_code: string
  resource_access_permission: {
    create: boolean
    read: boolean
    update: boolean
    delete: boolean
  }
}

interface UsePermissionsOptions {
  permissions: Permission[]
}

const usePermissions = ({ permissions }: UsePermissionsOptions) => {
  const hasPermission = (
    code: string,
    action: "create" | "read" | "update" | "delete",
  ) => {
    const resource = permissions.find(p => p.resource_access_code === code)
    return resource ? resource.resource_access_permission[action] : false
  }

  return { hasPermission }
}

export default usePermissions
