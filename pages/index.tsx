/* eslint-disable react/jsx-key */
import { Grid, Typography, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'
import { VideoLibrary, Favorite, Notifications } from '@mui/icons-material'
import React, { type MouseEventHandler } from 'react'
import { StreamCard } from '@/components/common/StreamCard'
import { type NextPage } from 'next'

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
})

const wavillageInfo: Array<{ name: string, title: string, description: string, imgSrc: string, onClick: MouseEventHandler }> = [
  {
    name: '와나나',
    title: 'box930205',
    description: '가짜코. 현재 장기휴방중',
    imgSrc: 'https://yt3.googleusercontent.com/ytc/AGIKgqNwfWlRDOEfuVAejC7fXp5aN4AZry41MmxUehNWyQ=s176-c-k-c0x00ffffff-no-rj',
    onClick: () => {}
  },
  {
    name: '김은별컴퍼니',
    title: 'akvl1229',
    description: '와빌리지 야랄 재능 1위.',
    imgSrc: 'https://yt3.googleusercontent.com/BzqmRzeC9vhAJ41zbolzzJm-MdPX7WSIrHZ0gZYORph07lHaiiXpQ1s0TB-j9Id53VZ-Z1C2=s176-c-k-c0x00ffffff-no-rj',
    onClick: () => {}
  },
  {
    name: '워노구',
    title: '1ho9',
    description: '합방몬스터.',
    imgSrc: 'https://yt3.googleusercontent.com/dEnO4vRAdKzVIcOwNbLC9PrTIP-8AWmi1jjXsvPQ5ZX6L-aGaUJgP7E_r0_-2npA2D969nWt_A=s176-c-k-c0x00ffffff-no-rj',
    onClick: () => {}
  },
  {
    name: '밤양갱',
    title: 'is_you96',
    description: '와빌리지 DLC. 통칭 이주씨.',
    imgSrc: 'https://yt3.googleusercontent.com/ytc/AGIKgqPTw4H1C4NJ9pxegrujdOYiJU-NB7QE7UGxE9an=s176-c-k-c0x00ffffff-no-rj',
    onClick: () => {}
  },
  {
    name: '미미짱',
    title: 'nangodof',
    description: '와빌리지 엄마. 통칭 황결.',
    imgSrc: 'https://yt3.googleusercontent.com/N_YrcTl1-6yQAhgrzfB-Cudz-Yf5I7ErLv50DDJqhraIw0FM8sNgzA8I0AceYjFXhJ2OTDBzEw=s176-c-k-c0x00ffffff-no-rj',
    onClick: () => {}
  }
]

const Main: NextPage = (): JSX.Element => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item>
        <StyledBox>
          <Typography variant="h4">Twitch Clone</Typography>
          <IconButton>
            <VideoLibrary />
          </IconButton>
          <IconButton>
            <Favorite />
          </IconButton>
          <IconButton>
            <Notifications />
          </IconButton>
        </StyledBox>
        <Typography variant="h2" align="center" gutterBottom>
          WAVILLAGE
        </Typography>
        <Grid container spacing={2}>
          {
            wavillageInfo.map((info, idx) => (
            <Grid item xs={12} md={2.2} >
              {/* Stream Card */}
              <StreamCard {...info} />
            </Grid>))
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Main
