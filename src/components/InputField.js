import styled from "styled-components";

const InputField = ({ icon, value, onUpdate }) => {
    return (
        <StyledInput>
            <img className="icon" src={icon} alt="icon" />
            <input type="number" value={value} onChange={onUpdate} placeholder="0" />
        </StyledInput>
    );
};

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
        padding-right: 15px;
        padding-top: 5px;
        padding-bottom: 5px;
        border: none;
        &:focus {
            outline: 2px solid ${({ theme }) => theme.colors.strongCyan}
        }
    }
`;

export default InputField;
