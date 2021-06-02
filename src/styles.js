import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: #225831
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
`;

export const MenuItems = styled.div`
  display: flex;
  padding: 10px;
  text-align: center;
  justify-content: space-around;
  color: ${(props) => props.theme.white};
`;
