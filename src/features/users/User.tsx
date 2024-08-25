import * as React from "react"

interface IUserProps {
  userRoles: string[]
}

const User: React.FunctionComponent<IUserProps> = ({ userRoles }) => {
  const canEdit = userRoles.includes("editor")
  const canView = userRoles.includes("offline_access")

  console.log("userRoles inside user component", userRoles)

  const hasPermissions = canEdit || canView

  return (
    <div>
      {hasPermissions ? (
        <>
          {canView && (
            <div>
              <h1>Bem-vindo, Usuário</h1>
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
