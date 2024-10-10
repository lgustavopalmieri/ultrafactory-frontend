// ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
// ⚙️---⚙️---⚙️ Powered by Ultrafactory Software Solutions 2024 ⚙️---⚙️---⚙️
// ____________________________________________________________________
import { useState } from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from "@mui/material"
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded"
import MenuIcon from "@mui/icons-material/Menu"
import { darkTheme } from "@/styles/theme/theme.config"
import Drawer from "./Drawer"
import Languages from "../Languages/Languages"

const Menu: React.FunctionComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open)
  }

  const handleLogout = () => {
    console.log("Logout button clicked")
  }

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: darkTheme.palette.background.default }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ultrafactory
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <Languages />
          </Box>

          <Button color="inherit" onClick={handleLogout}>
            <LogoutRoundedIcon />
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
    </>
  )
}

export default Menu
