import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { BrowserRouter as BrowserRoute } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<BrowserRoute>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </BrowserRoute>
  </StrictMode>,
)
