//components
import Home from "./components/Home";
import ProductList from "./components/ProductsList";
import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import { useState } from "react";

function App() {
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
  console.log(local, "local");
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
      <ProductList />
    </ThemeProvider>
  );
}

export default App;
