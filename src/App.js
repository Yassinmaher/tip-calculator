import GlobalStyles from './components/GlobalStyles'
import styled, { ThemeProvider } from 'styled-components'
import logo from './images/logo.svg'
import iconPerson from './images/icon-person.svg'
import iconDollar from './images/icon-dollar.svg'
import InputField from './components/InputField'
import Tip from './components/Tip'
import theme from './config/theme'
import { useState } from 'react'

const tipsList = [5, 10, 15, 25, 35, 'custom']

const App = () => {
    const [bill, setBill] = useState(0)
    const [persons, setPersons] = useState(0)
    const [activeIndex, setActiveIndex] = useState(1)

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <img src={logo} alt="logo" />
            <StyledContainer>
                <form>
                    <div className="form-group">
                        <label>Bill</label>
                        <InputField
                            icon={iconDollar}
                            value={bill}
                            onUpdate={(e) => setBill(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Select Tip %</label>
                        <div className="tipContainer">
                            {tipsList.map((tip, i) => (
                                <Tip
                                    key={i}
                                    value={tip}
                                    select={activeIndex === i}
                                    onTap={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Number of Persons</label>
                        <InputField
                            icon={iconPerson}
                            value={persons}
                            onUpdate={(e) => setPersons(e.target.value)}
                        />
                    </div>
                </form>
            </StyledContainer>
        </ThemeProvider>
    )
}

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
`

export default App
