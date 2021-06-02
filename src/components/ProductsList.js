// import "../App.css"; //styling
import products from "../products"; //component
import { MenuItems } from "../styles";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const newArray = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <MenuItems> {newArray}</MenuItems>;
};

export default ProductList;
