import { Drawer } from '@mui/material'
import styled from 'styled-components'

export const StyledDrawer = styled(Drawer)`
  width: 240px;
  flex-shrink: 0;
`

export const StyledDrawerPaper = styled.div`
  width: 240px;
  background-color: ${({ theme }) => theme.palette.grey[200]};
`
