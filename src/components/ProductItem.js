// import "../App.css"; //styling

import { ImgStyle } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";

const ProductItem = (props) => {
  return (
    <div>
      <ImgStyle
        onClick={() => props.setCurrentProduct(props.product)}
        src={props.product.imageURL}
        alt="coffe"
      />
      <p>{props.product.name}</p>
      <p>{props.product.price} JD</p>
      <DeleteButton onClick={() => props.deleteProduct(props.product.id)} />
    </div>
  );
};

export default ProductItem;
