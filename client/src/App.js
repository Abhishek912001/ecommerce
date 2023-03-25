import React from "react";
import { ProductCards, FooterBanner, HeroBanner } from './components'
import { fetchProducts } from './api'
import { Routes, Route } from "react-router-dom";
import ProductDetails from './pages/productDetails'

const Home = ({ products }) => {
    return (  
        <>
            <HeroBanner />

            <div className="products-heading">
                <h2>Best Selling Products</h2>
                <p>list of best selling products</p>
            </div>

            <div className="products-container">
      {/* {passing products containing data to product prop in ProductCards} */}
                {products?.map((product) => 
                <ProductCards key={product._id} product={product} />)}
            </div>

            <FooterBanner />     
        </>   
    );
}

// fetching product data from fetchProduct api call and storing it in prop 'products' to use in home elements.

const HomePage = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const { data } = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductsData();
  }, []);

  return (
  
  <Routes>
    <Route path="/" element={<Home products={products} />} />
    <Route path="/product/:slug" element={<ProductDetails products={products} />} /> {/*selectedProduct={products.find(p => p.slug === slug) this approach can also be used here in this we wont need to use usepram hook */}
  </Routes>
        
  );
};

export default HomePage;