import "./App.css";
import products from "./products";
function App() {
  const newArray = products.map((product) => (
    <div>
      <img src={product.imageURL} alt="coffe" />
      <p>{product.name}</p>
      <p>{product.price} JD</p>
    </div>
  ));

  return (
    <div>
      <h1 className="hello">Coffe House</h1>
      <h4 className="hello">Coffe is our passion</h4>
      <img
        className="my-pic"
        src="https://vcdn-english.vnecdn.net/2020/11/20/anh3-1605853496-8016-1605854457_680x408.jpg"
        alt="mypic"
      />
      <br></br>
      <div className="menu-items">{newArray}</div>
    </div>
  );
}

export default App;
