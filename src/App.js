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
    local === "dark" ? "dark" : "light"
  );
  const ToggleCurrentTheme = () => {
    if (currentTheme === "light") {
      localStorage.setItem("current", "dark");
      setCurrentTheme("dark");
    } else {
      localStorage.setItem("current", "light");
      setCurrentTheme("light");
    }
  };
  console.log(local, "local");
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={ToggleCurrentTheme}>
        {currentTheme === "dark" ? "Light" : "Dark"}
      </ThemeButton>
      <Home />
      <ProductList />
    </ThemeProvider>
  );
}

export default App;
