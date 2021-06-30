import styled, {css} from "styled-components"

/* css import를 함으로써 css 기능 사용가능함 */
/* mixin, :root 변수랑 똑같은거 */
const AwesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  border: none;
`

/* component에 attributes를 추가하는 방법 */
export const Input = styled.input.attrs({
    required: true
})`
    border-radius: 5px;
    ${AwesomeCard}
`