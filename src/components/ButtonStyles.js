import styled from "styled-components";
import Button from "./Button";

/* HTML태그 뿐만 아니라 만든 Component도 사용 가능
이렇게 사용하려면 Button Component에 className을 넣어줘야 함 */
export const StyledButton = styled(Button)`
    width: 200px;
    height: 50px;
    border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color: white;
    font-weight: 600px;
    appearance: none;
    cursor: pointer;
    &:active,
    &:hover,
    &:focus {
        outline: none;
        background-color: coral;
        & label {
            color: green
        }
    }
    background-color: ${ props => props.backgroundColor };
`

export const ButtonLabel = styled.label`
    font-size: 25px;
    color: white;
`