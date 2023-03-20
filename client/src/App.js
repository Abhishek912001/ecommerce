import React from "react";
import { Product, FooterBanner, HeroBanner } from './components'
import { fetchProducts } from './api'

const Home = ({ products }) => {
    return (
        <>
            <HeroBanner />

            <div className="products-heading">
                <h2>Best Selling Products</h2>
                <p>list of best selling products</p>
            </div>

            <div className="products-container">
      {/* {passing products containing data to product} */}
                {products?.map((product) => 
                <Product key={product._id} product={product} />)}
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
      const { data } = await fetchProducts();
      setProducts(data);
    };

    fetchProductsData();
  }, []);

  return <Home products={products} />;
};

export default HomePage;