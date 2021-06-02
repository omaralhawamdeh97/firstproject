import "../App.css"; //styling
import products from "../products"; //component
import ProductItem from "./ProductItem"; //component

const ProductList = () => {
  const newArray = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <div className="menu-items">{newArray}</div>;
};

export default ProductList;
