import { Box } from '@chakra-ui/react'
import NavIndex from './Components/NavigationBars'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Pages/Homepage'
import BlogPage from './Components/Pages/Blog'

function App() {

  return (
    <Box>
      <NavIndex />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
    </Box>
  )
}

export default App
