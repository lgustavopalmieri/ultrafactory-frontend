import {
  IconButton,
  Drawer as MaterialDrawer,
  List,
  ListItemText,
  Box,
  Divider,
  ListItemButton,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-router-dom"
import { MENU_BUTTONS } from "@/constants/menu/menu"

interface IDrawerProps {
  toggleDrawer: (open: boolean) => void
  drawerOpen: boolean
}

const Drawer: React.FunctionComponent<IDrawerProps> = ({
  toggleDrawer,
  drawerOpen,
}: IDrawerProps) => {
  return (
    <MaterialDrawer
      anchor="left"
      open={drawerOpen}
      onClose={() => toggleDrawer(false)}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onKeyDown={() => toggleDrawer(false)}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={() => toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />
        <List>
          {MENU_BUTTONS.map(button => (
            <ListItemButton component={Link} to={button.path}>
              <ListItemText primary={button.title} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </MaterialDrawer>
  )
}

export default Drawer
