import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    
    body {
        background-color: ${({ theme }) => theme.colors.lightGrayishCyan};
        font-family: ${({ theme }) => theme.font.family};
        display: flex;
        justify-content: center;
        padding-top: 100px
    }
`;

export default GlobalStyle;
