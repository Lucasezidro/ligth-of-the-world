import React from 'react'
import { Home } from './pages/Home/home'
import { Outlet } from 'react-router-dom'
import { CreatePost } from './pages/createPost/createPost'
import { ReadPost } from './pages/ReadPost/ReadPost'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './themes/theme'

function App() {

  return (
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
  )
}

export default App
