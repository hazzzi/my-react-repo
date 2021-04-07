import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import './index.css'
import Main from './views/Main'
import theme from './theme'

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Main />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)
