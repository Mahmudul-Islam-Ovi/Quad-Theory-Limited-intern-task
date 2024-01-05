import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";
import ProductsCard from "../../component/ProductsCard";

const RecommendedSection = () => {
      const { products } = useContext(ProductContext);
      const recommendedProducts = products.filter(
        (item) => item.IsRecommended === true
      );
    return (
      <div>
        <ProductsCard
          title="Recommended"
          products={recommendedProducts}
        ></ProductsCard>
      </div>
    );
};

export default RecommendedSection;