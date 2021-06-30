import { StyledButton, ButtonLabel } from "./components/ButtonStyles";
import { Input } from "./components/InputStyle";
import { Container } from "./components/ContainerStyles";
import { GlobalStyle } from "./components/GlobalStyle";
import styled, {css, keyframes} from "styled-components";

function App() {
  return (
    <Container>
      <GlobalStyle/>
      <StyledButton buttonLabel="Click Here" backgroundColor="violet"></StyledButton>
      <Input></Input>
    </Container>
  )
};


export default App;
