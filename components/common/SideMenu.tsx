import React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  IconButton,
  Divider,
  styled
  // Theme
} from '@mui/material'
import { useRouter } from 'next/router'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'

interface SideBarProps {
  open: boolean
  onClose: () => void
}

interface ListItemType {
  label: string
  icon: React.ReactNode
  path: string
}

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 240,
    borderRight: 'none',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
}))

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.contrastText
}))

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.primary.contrastText
}))

const sideBarList: ListItemType[] = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    path: '/'
  },
  {
    label: 'Settings',
    icon: <SettingsIcon />,
    path: '/settings'
  }
]

const SideBar = ({ open, onClose }: SideBarProps): JSX.Element => {
  const router = useRouter()
  const theme = useTheme()

  const handleListItemClick = (path: string): void => {
    void router.push(path)
    onClose()
  }

  return (
    <>
      <StyledIconButton
        aria-label="open drawer"
        edge="start"
        onClick={onClose}
        sx={{ mr: 2, ...(open && { display: 'none' }) }}
      >
        <MenuIcon />
      </StyledIconButton>
      <StyledDrawer anchor="left" open={open} onClose={onClose}>
        <List>
          {sideBarList.map(({ label, icon, path }) => (
            <ListItem
              button
              key={label}
              onClick={() => { handleListItemClick(path) }}
              sx={{
                ...(router.pathname === path && {
                  backgroundColor: theme.palette.primary.dark
                })
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <StyledListItemText primary={label} />
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* Add footer content */}
      </StyledDrawer>
    </>
  )
}

export default SideBar
