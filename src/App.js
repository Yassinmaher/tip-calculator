import GlobalStyles from "./components/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import logo from "./images/logo.svg";
import iconPerson from "./images/icon-person.svg";
import iconDollar from "./images/icon-dollar.svg";
import InputField from "./components/InputField";
import Tip from "./components/Tip";
import theme from "./config/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <img src={logo} alt="logo" />
            <StyledContainer>
                <form>
                    <div className="form-group">
                        <label>Bill</label>
                        <InputField icon={iconDollar} />
                    </div>
                    <div className="form-group">
                        <label>Select Tip %</label>
                        <div className="tipContainer">
                            <Tip value="5" select={true} />
                            <Tip value="10" />
                            <Tip value="15" />
                            <Tip value="25" />
                            <Tip value="35" />
                            <Tip value="custom" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Number of Persons</label>
                        <InputField icon={iconPerson} />
                    </div>
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
    .tipContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        margin-top: 5px;
    }
    .form-group {
        margin-bottom: 10px;
    }
`;

export default App;
