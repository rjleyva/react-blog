import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './app.tsx'
import Header from './components/Header/Header.tsx'
import NoiseBackground from './components/NoiseBackground/NoiseBackground.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <NoiseBackground />
        <Header home="ryanjayleyva" />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
