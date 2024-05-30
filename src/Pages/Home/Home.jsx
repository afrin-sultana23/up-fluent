import React from 'react';
import Banner from "./Banner.jsx";
import Categories from "../Category/Categories.jsx";
import ProductSlider from "../PopularClasses/ProductSlider.jsx";

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <ProductSlider></ProductSlider>
            <Categories></Categories>
        </div>
    );
};

export default Home;