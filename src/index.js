import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import './index.css'
import Main from './views/Main'
import theme from './theme'
import { RecoilRoot } from 'recoil'

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <Main />
            </ThemeProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root'),
)
