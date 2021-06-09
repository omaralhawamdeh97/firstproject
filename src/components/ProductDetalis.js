import { Detalis, DetailedImgStyle, ThemeButton } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";

const ProductDetalis = (props) => {
  return (
    <Detalis>
      <DetailedImgStyle src={props.product.imageURL} alt="coffe" />
      <h3>{props.product.name}</h3>
      <p>{props.product.description}</p>
      <p>{props.product.price} JD</p>
      <ThemeButton onClick={() => props.setCurrentProduct(null)}>
        Back
      </ThemeButton>

      <DeleteButton onClick={() => props.deleteProduct(props.productID)} />
    </Detalis>
  );
};

export default ProductDetalis;
