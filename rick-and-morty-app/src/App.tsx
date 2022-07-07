import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './presentation/theme/theme'
import RouterList from './presentation/routes/RouterList'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterList />
    </ThemeProvider>
  )
}

export default App
