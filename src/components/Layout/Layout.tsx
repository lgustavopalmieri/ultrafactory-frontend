//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
//⚙️---⚙️---⚙️ Powered by Ultrafactory Software Solutions 2024 ⚙️---⚙️---⚙️ 
//____________________________________________________________________
import { Container } from "@mui/material"

import { SnackbarProvider } from "notistack"
import Menu from "./Menu"

interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<ILayoutProps> = ({
  children,
}: ILayoutProps) => {
  return (
    <>
      <SnackbarProvider
        autoHideDuration={2000}
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Menu />
        <Container maxWidth="lg" sx={{ color: "white", my: 12 }}>
          {children}
        </Container>
      </SnackbarProvider>
    </>
  )
}

export default Layout
