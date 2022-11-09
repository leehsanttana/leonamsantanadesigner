import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/app";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./styles/defaultTheme";
import HeroImageSection from "./Views/HeroImageSection";
import MainSection from "./Views/Mainsection";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>
        <HeroImageSection />
        <MainSection />
      </Container>
    </ThemeProvider>
  );
};

export default App;
