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
                <div className="result">
                    <div className="result-group">
                        <div className='result-title'>
                            <h5>Tip Amount</h5>
                            <h6>/ Perosn</h6>
                        </div>
                        <h1>$4.27</h1>
                    </div>
                    <div className="result-group">
                        <div className='result-title'>
                            <h5>Total</h5>
                            <h6>/ Perosn</h6>
                        </div>
                        <h1>$32.79</h1>
                    </div>
                    <button>
                        Reset
                    </button>
                </div>
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
    display: flex;
    .form-group {
        margin-bottom: 10px;
    }
    .tipContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        margin-top: 5px;
    }
    .result {
        display: flex;
        flex-direction: column;
        margin-left: 30px;
        background-color: ${({ theme }) => theme.colors.veryDarkCyan};
        border-radius: 20px;
        padding: 20px;
        .result-group {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            .result-title {
                margin-right: 100px;
            }
            h5 {
                color: ${({ theme }) => theme.colors.white};
                margin-bottom: 0px;
                margin-top: 0px;
            }
            h6 {
                margin-top: 0;
                margin-bottom: 0;
            }
            h1 {
                color: ${({ theme }) => theme.colors.strongCyan};
                margin-top: 0;
                margin-bottom: 0;
            }
        }
        button {
            margin-top: auto;
            background-color: ${({ theme }) => theme.colors.strongCyan};
            border: none;
            color: ${({ theme }) => theme.colors.veryDarkCyan};
            border-radius: 5px;
            padding: 10px 20px;
            font-weight: bolder;
            text-transform: uppercase;
            font-size: 15px;
        }
    }
`

export default App
