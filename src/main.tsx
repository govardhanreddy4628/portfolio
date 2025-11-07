import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeProvider.tsx'
import { ThemeProvider as NextThemeProvider } from "next-themes";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextThemeProvider attribute="class" defaultTheme="dark">
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </NextThemeProvider>
  </StrictMode>,
)
