import styled from 'styled-components'

const InputField = ({ icon }) => {
  return (
    <StyledInput>
      <img className='icon' src={icon} alt='icon' />
      <input type='text' />
    </StyledInput>
  )
}

const StyledInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 10px;
  .icon {
    position: absolute;
    z-index: 2;
    margin-left: 10px;
  }
  input {
    background-color: ${({ theme }) => theme.colors.lighterGrayishCyan};
    color: ${({ theme }) => theme.colors.veryDarkCyan};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size};
    font-family: ${({ theme }) => theme.font.family};
    border-radius: 5px;
    text-align: right;
    width: 100%;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    border: none;
    position: relative;
    &:focus {
      outline: none;
    }
  }
`

export default InputField
