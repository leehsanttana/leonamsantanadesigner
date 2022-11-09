import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./styles/defaultTheme";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Hello World</h1>
    </ThemeProvider>
  );
};

export default App;