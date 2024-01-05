import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);
    await fetch(
      "https://cors-anywhere.herokuapp.com/http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10",
      {
        // ...
        referrerPolicy: "unsafe_url",
      }
    )
      // await fetch(
      //   "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      // )
      .then((res) => res.json())
      .then((data) => setProducts(data.Items));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]" />
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
        </div>
      </div>
    );
  }
  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
