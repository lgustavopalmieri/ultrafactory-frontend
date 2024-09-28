import * as React from "react"
import axios from "axios"
import api from "@/providers/axios"

interface IUserProps {
  userRoles: string[]
}

const User: React.FunctionComponent<IUserProps> = ({ userRoles }) => {
  const [userData, setUserData] = React.useState<any>(null)
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string | null>(null)

  const canEdit = userRoles.includes("editor")
  const canView = userRoles.includes("offline_access")

  const hasPermissions = canEdit || canView

  React.useEffect(() => {
    if (hasPermissions) {
      api
        .get("users/find-one") // Substitua com a URL da sua API
        .then(response => {
          setUserData(response.data)
          console.log(response.data)
          setLoading(false)
        })
        .catch(err => {
          setError("Erro ao carregar dados do usuário")
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [hasPermissions])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      {hasPermissions ? (
        <>
          {canView && userData && (
            <div>
              <h1>Bem-vindo, {userData.name}</h1>
            </div>
          )}

          {canEdit ? (
            <button>Editar Perfil</button>
          ) : (
            <p>Você não tem permissão para editar o perfil.</p>
          )}
        </>
      ) : (
        <div>Você não tem permissão para acessar esta página.</div>
      )}
    </div>
  )
}

export default User
