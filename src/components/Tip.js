import styled from "styled-components"

let selected;

const Tip = ({ value, select=false }) => {
    selected = select;
    return (
        <StyledTip>{value}%</StyledTip>
    )
}

const StyledTip = styled.div`
    background-color: ${({ theme }) => selected ? theme.colors.strongCyan : theme.colors.veryDarkCyan};
    color: ${({ theme }) => selected ? theme.colors.veryDarkCyan : theme.colors.white};
    //font-size: ${({ theme }) => theme.font.size};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    text-align: center;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
`

export default Tip