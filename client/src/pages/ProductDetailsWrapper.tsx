import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function ProductDetailsWrapper() {
  const { id } = useParams();

  return <ProductDetails key={id} />;
}

export default ProductDetailsWrapper;