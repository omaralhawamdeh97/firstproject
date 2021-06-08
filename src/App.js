//components
import Home from "./components/Home";
import ProductList from "./components/ProductsList";
import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import { useState } from "react";
import ProductDetalis from "./components/ProductDetalis";

function App() {
  const [currentProduct, setCurrentProduct] = useState(null);
  const local = localStorage.getItem("current");

  const [currentTheme, setCurrentTheme] = useState(
    local === "green" ? "green" : local === "light" ? "light" : "grey"
  );
  const ToggleCurrentTheme = () => {
    if (currentTheme === "light") {
      localStorage.setItem("current", "green");
      setCurrentTheme("green");
    }
    if (currentTheme === "green") {
      localStorage.setItem("current", "grey");
      setCurrentTheme("grey");
    } else if (currentTheme === "grey") {
      localStorage.setItem("current", "light");
      setCurrentTheme("light");
    }
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={ToggleCurrentTheme}>
        {currentTheme === "light"
          ? "green"
          : currentTheme === "green"
          ? "grey"
          : "light"}
      </ThemeButton>

      <Home />
      {currentProduct ? (
        <ProductDetalis
          product={currentProduct}
          setCurrentProduct={setCurrentProduct}
        />
      ) : (
        <ProductList setCurrentProduct={setCurrentProduct} />
      )}
    </ThemeProvider>
  );
}

export default App;
