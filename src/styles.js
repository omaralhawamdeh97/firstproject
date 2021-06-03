import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  light: {
    mainColor: "#244621", // main font color
    backgroundColor: "#fefafb", // main background color
    white: "#ffffff",
  },

  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#244621", // main background color
    white: "#ffffff",
  },

  grey: {
    mainColor: "#328975", // main font color
    backgroundColor: "#876933", // main background color
    white: "#ffffff",
  },
};

export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.backgroundColor};
    color : ${(props) => props.theme.mainColor};
}
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Descreption = styled.h4`
  text-align: center;
`;

export const ShopImage = styled.img`
  display: flex;
  width: 1350px;
  height: 500px;
  margin-bottom: 20px;
  justify-content: space-around;
  align-self: center;
`;

export const MenuItems = styled.div`
  display: flex;
  padding: 10px;
  text-align: center;
  justify-content: space-around;
  color: ${(props) => props.theme.white};
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;
