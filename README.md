# Latest Release (2021/06/28)

![Generic badge](https://img.shields.io/badge/build-passing-green.svg)
The current stable version is v0.0.1.

# Overview
- styled Component
1. props parameter
2. & 
```js
import Button from "./Button"; /* Button Component */

/* HTML tag일때는 styled.button, React Component일때는 styled(Button) */
export const StyledButton = styled(Button)`
    width: 200px;
    height: 50px;
    &:hover {
        outline: none;
        background-color: coral;
        & label {
            color: green
        }
    }
    background-color: ${ props => props.backgroundColor };
`
```


# Technology Stack

&nbsp;&nbsp;
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>
<img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=Styled-Components&logoColor=white"/></a>
