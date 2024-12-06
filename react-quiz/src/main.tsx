import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QuizContextProvider } from './context/QuizContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </StrictMode>
)
