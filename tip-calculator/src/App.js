import GlobalStyle from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme.style";
import logo from './images/logo.svg';

const App = () => {
    return (
      <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <img src={logo} alt="logo" />
      </ThemeProvider>
    );
};

export default App;
