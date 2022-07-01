import { ThemeProvider } from '@mui/material'
import React from 'react'

import RouterList from './presentation/routes/RouterList'
import { theme } from './presentation/theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterList />
    </ThemeProvider>
  )
}

export default App
