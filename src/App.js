import { StyledButton, ButtonLabel, Card } from "./components/ButtonStyles";
import { Input } from "./components/InputStyle";
import { Container } from "./components/ContainerStyles";
import { GlobalStyle } from "./components/GlobalStyle";
import styled, {css, keyframes, ThemeProvider} from "styled-components";
import theme from './themes/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle/>
      <StyledButton buttonLabel="Click Here" backgroundColor="violet"></StyledButton>
      <Input></Input>
    </Container>
    </ThemeProvider>
  )
};


export default App;
