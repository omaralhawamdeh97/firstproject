//components
import Home from "./components/Home";
import ProductList from "./components/ProductsList";
import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";
import {theme} from "./styles"
import { useState } from "react";



function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const ToggleCurrentTheme = () => {
    if (currentTheme === "light") 
     setCurrentTheme("dark")
    else 
     setCurrentTheme("light")
  }
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={ToggleCurrentTheme}>Switch theme</ThemeButton>
      <Home />
      <ProductList />
    </ThemeProvider>
  );
}

export default App;
