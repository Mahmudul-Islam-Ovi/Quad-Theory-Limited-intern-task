import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";
import ProductsCard from "../../component/ProductsCard";

const PopularProducts = () => {
  const { products } = useContext(ProductContext);
  // show only popular products
  const popularProducts = products.filter((item) => item.IsPopular === true);
  return (
    <div>
      <ProductsCard title=" Popular" products={popularProducts}></ProductsCard>
    </div>
  );
};

export default PopularProducts;
