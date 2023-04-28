import { Box, Typography } from '@mui/material'
import React from 'react'
interface streamProps { name: string, title: string, description: string, imgSrc: string }
export function StreamCard ({ name, title = '', description = '', imgSrc = '' }: streamProps): JSX.Element {
  return (<Box sx={{ p: 2, bgcolor: 'background.paper' }}>
          <img src={imgSrc.length > 0 ? imgSrc : 'https://picsum.photos/seed/stream1/400/225'} alt={name} style={{ width: '100%' }} />
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
  )
}
