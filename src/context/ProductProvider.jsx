import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);
    await fetch(
      // when i deploy to netlify, we need to use https  this is error message from console

      // Mixed Content: The page at 'https://imaginative-licorice-69df63.netlify.app/' was loaded over HTTPS, but requested an insecure resource 'http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10'. This request has been blocked; the content must be served over HTTPS.

      // this is the api link you gave me but it is not working in netlify

      //"http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"

      // so i add data.json file to public folder and use it manually to get data 

      // all functions are working fine but i am not able to deploy it on netlify because of this error

      "./data.json"
    )
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
