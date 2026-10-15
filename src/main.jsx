import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/dancing-script/600.css'
import '@fontsource/dancing-script/700.css'
import '@fontsource/quicksand/500.css'
import '@fontsource/quicksand/700.css'
import './styles.css'
import App from './App.jsx'
import { FXProvider } from './fx.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FXProvider>
      <App />
    </FXProvider>
  </StrictMode>,
)
