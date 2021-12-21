import GlobalStyle from "./styles/Global.styled";
import styled, { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme.style";
import logo from "./images/logo.svg";
import iconPerson from "./images/icon-person.svg";
import iconDollar from "./images/icon-dollar.svg";
import InputField from "./components/InputField";
import Tip from './components/Tip'

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <img src={logo} alt="logo" />
            <StyledContainer>
                <form>
                    <StyledFormGroup>
                        <label>Bill</label>
                        <InputField icon={iconDollar} />
                    </StyledFormGroup>
                    <StyledFormGroup>
                        <label>Select Tip %</label>
                        <StyledTipContainer>
                            <Tip value="5" select={true}/>
                            <Tip value="10"/>
                            <Tip value="15" />
                            <Tip value="25" />
                            <Tip value="35" />
                            <Tip value="custom" />
                        </StyledTipContainer>
                    </StyledFormGroup>
                    <StyledFormGroup>
                        <label>Number of Persons</label>
                        <InputField icon={iconPerson} />
                    </StyledFormGroup>
                </form>
            </StyledContainer>
        </ThemeProvider>
    );
};

const StyledContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    margin-top: 30px;
    padding: 20px;
    border-radius: 20px;
    text-align: left;
`;

const StyledFormGroup = styled.div`
  margin-bottom: 10px;
`;

const StyledTipContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-top: 5px;
`

export default App;
