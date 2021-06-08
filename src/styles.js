import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  light: {
    mainColor: "#244621", // main font color
    backgroundColor: "#fefafb", // main background color
    white: "#ffffff",
  },

  green: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#244621", // main background color
    white: "#ffffff",
  },

  grey: {
    mainColor: "white", // main font color
    backgroundColor: "#393e46", // main background color
    white: "#ffffff",
  },
};

export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.backgroundColor};
    color : ${(props) => props.theme.mainColor};
}
`;
export const homeDiv = styled.div`
  display: "flex";
  flex-direction: "column";
  align-items: "center";
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
  border-radius: 15px;
`;

export const MenuItems = styled.div`
  display: flex;
  padding: 10px;
  text-align: center;
  justify-content: space-around;

  color: ${(props) => props.theme.mainColor};
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  height: 55px;
  width: 100px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
  cursor: pointer;
`;

export const ImgStyle = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 15px;
  cursor: pointer;
`;

export const DetailedImgStyle = styled.img`
  height: 500px;
  width: 100%;
  border-radius: 15px;
  cursor: pointer;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const Detalis = styled.div`
  padding: 20px;
  width: 40%;
  margin: auto;
  margin-top: 20px;
  border-radius: 10px;
  text-align: center;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;
