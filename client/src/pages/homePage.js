import React, { useState } from 'react';
import { ProductCards, FooterBanner, HeroBanner } from '../components'
import { fetchProducts } from '../api/products';
import { fetchBannerData } from '../api/banners';
import { Routes, Route, useLocation  } from "react-router-dom";
import ProductDetails from './productDetails'
import Success from "./success";
import { ScaleLoader } from 'react-spinners';

const Home = ({ products, bannerData }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  const handleImageLoad = () => {
    setIsLoading(false);
  };


    return (  
        <>
            <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

            <div className="products-heading">
                <h2>Best Selling Products</h2>
                <p>list of best selling products</p>
            </div>

            <div className="products-container" >
            {isLoading && <div className="spinner"><ScaleLoader color="#f02d34" /></div>}
      {/* {passing products containing data to product prop in ProductCards} */}
                {products?.map((product) => 
                <ProductCards key={product._id} product={product} onLoad={handleImageLoad}  />)}
            </div>

            <FooterBanner footerBanner={bannerData.length && bannerData[0]} />   
        </>   
    );
}

// fetching product data from fetchProduct api call and storing it in prop 'products' to use in home elements.

const HomePage = () => {
  const [products, setProducts] = React.useState([]);
  const [bannerData, setBannerData] = React.useState([]);
  const location = useLocation();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: productsData } = await fetchProducts();
        const { data: bannerData } = await fetchBannerData();
       
        setProducts(productsData);
        setBannerData(bannerData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
  
  <Routes>
    <Route path="/" element={<Home products={products} bannerData={bannerData} />} />
    <Route path="/product/:slug" element={<ProductDetails products={products} />} /> {/*selectedProduct={products.find(p => p.slug === slug) this approach can also be used here in this we wont need to use usepram hook */}
    <Route path="/success" element={<Success />} />
    <Route path="*" element={<div className='logo'>Sorry, the page you requested could not be found.</div>} />
  </Routes>
        
  );
};

export default HomePage;