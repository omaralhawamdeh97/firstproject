import "../App.css"; //styling
import products from "../products"; //component
const ProductList = () => {
  const newArray = products.map((product) => (
    <div>
      <img src={product.imageURL} alt="coffe" />
      <p>{product.name}</p>
      <p>{product.price} JD</p>
    </div>
  ));
  return <div className="menu-items">{newArray}</div>;
};

export default ProductList;
