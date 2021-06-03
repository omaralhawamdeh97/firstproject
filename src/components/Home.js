// import "../App.css"; // styling
import { Descreption, ShopImage, Title } from "../styles";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Title> Coffee House</Title>
      <Descreption> Coffe is our passion</Descreption>
      <ShopImage
        src="https://vcdn-english.vnecdn.net/2020/11/20/anh3-1605853496-8016-1605854457_680x408.jpg"
        alt="mypic"
      />
    </div>
  );
};

export default Home;
