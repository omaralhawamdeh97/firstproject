//components
import Home from "./components/Home";
import ProductList from "./components/ProductsList";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#244621", // main font color
  backgroundColor: "#fefafb", // main background color
  white: "#ffffff",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <ProductList />
    </ThemeProvider>
  );
}

export default App;
