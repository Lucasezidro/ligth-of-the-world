import React from 'react'
import { Home } from './pages/Home/home'
import { Box, useColorModeValue } from '@chakra-ui/react'

function App() {
  const backgroundColor = useColorModeValue("white", "gray.900")

  return (
    <Box bg={backgroundColor}>
      <Home />
    </Box>
  )
}

export default App
