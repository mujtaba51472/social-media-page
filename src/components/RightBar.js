import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const RightBar = () => {
  return (
    <Box  flex={1} p={2} sx={{display:{xs: "none" , sm: "block"}}}>
      <Box position='fixed'>
    <Typography variant='h6' fontWeight="300">Online Friends</Typography>
    <AvatarGroup max={4}>
  <Avatar alt="Memy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="" />
  <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/2.jpg" />
</AvatarGroup>
    <Box marginTop={2}>
    <Typography variant='body2' fontWeight={200}  mb={2}>Post Photos</Typography>
<ImageList cols={3} rowHeight={70} gap={5}>
<ImageListItem >
      <img
        src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format&dpr=2'
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format&dpr=2'
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src='https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=242&h=121&fit=crop&auto=format&dpr=2'
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src='https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=242&h=242&fit=crop&auto=format&dpr=2'
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src='https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=242&h=121&fit=crop&auto=format&dpr=2'
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src='https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=121&h=121&fit=crop&auto=format&dpr=2'
        loading="lazy"
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format&dpr=2'
        loading="lazy"
      />
    </ImageListItem>
</ImageList>
    </Box>
      </Box>
    </Box>

    
  )
}

export default RightBar