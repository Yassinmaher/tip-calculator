import styled from 'styled-components'

const Tip = ({ value, select = false }) => {
  return <StyledTip select={select}>{value}%</StyledTip>
}

const StyledTip = styled.div`
  background-color: ${(props) =>
    props.select
      ? props.theme.colors.strongCyan
      : props.theme.colors.veryDarkCyan};
  color: ${(props) =>
    props.select ? props.theme.colors.veryDarkCyan : props.theme.colors.white};
  //font-size: ${({ theme }) => theme.font.size};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-align: center;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
`

export default Tip
