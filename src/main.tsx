import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
const { Button } = chakraTheme.components
import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme, } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'


const theme = extendBaseTheme({
  components: {
    Button,
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraBaseProvider>
  </React.StrictMode>,
)
