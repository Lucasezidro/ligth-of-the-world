import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./themes/theme"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/home'
import { CreatePost } from './pages/createPost/createPost'
import { ReadPost } from './pages/ReadPost/ReadPost'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>           
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/content" element={<ReadPost />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
