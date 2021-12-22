import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`  
    body {
        background-color: ${({ theme }) => theme.colors.lightGrayishCyan};
        font-family: ${({ theme }) => theme.font.family};
        font-weight: ${({ theme }) => theme.font.weight.bold};
        color: ${({ theme }) => theme.colors.darkerGrayishCyan};
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 100px;
        text-align: center;
        margin: 0;
    }
`

export default GlobalStyles
