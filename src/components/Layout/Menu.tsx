import { useState } from "react"
import { darkTheme } from "@/styles/theme/theme.config"
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material"
import LoginRoundedIcon from "@mui/icons-material/LoginRounded"
import MenuIcon from "@mui/icons-material/Menu"
import Drawer from "./Drawer"

interface IMenuProps {}

const Menu: React.FunctionComponent<IMenuProps> = props => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open)
  }
  const handleLogin = () => {
    console.log("Login button clicked")
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

          <Button color="inherit" onClick={handleLogin}>
            <LoginRoundedIcon />
            {/* <LogoutRoundedIcon /> */}
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
    </>
  )
}

export default Menu
