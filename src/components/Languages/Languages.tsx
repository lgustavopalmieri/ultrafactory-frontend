//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
//⚙️---⚙️---⚙️ Powered by Ultrafactory Software Solutions 2024 ⚙️---⚙️---⚙️ 
//____________________________________________________________________
import React, { useState } from "react"
import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
} from "@mui/material"
import LanguageIcon from "@mui/icons-material/Language"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import Flag from "react-world-flags"
import { useAppDispatch } from "@/app/hooks"
import { setLanguage } from "./languagesSlice"
import { LanguagesType } from "@/constants/languages"

const Languages: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLanguageChange = (language: LanguagesType) => {
    dispatch(setLanguage(language))
    handleClose()
  }

  return (
    <div>
      <IconButton onClick={handleClick} color="inherit">
        <LanguageIcon />
        <ArrowDropDownIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => handleLanguageChange("english")}>
          <ListItemIcon>
            <Flag code="US" style={{ width: 24, marginRight: 8 }} />
          </ListItemIcon>
          <Typography variant="inherit">English</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange("portuguese")}>
          <ListItemIcon>
            <Flag code="BR" style={{ width: 24, marginRight: 8 }} />
          </ListItemIcon>
          <Typography variant="inherit">Português</Typography>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Languages
