import React from 'react';
import Banner from "./Banner.jsx";
import Categories from "../Category/Categories.jsx";
import ProductSlider from "../PopularClasses/ProductSlider.jsx";
import BgHome from "./BgHome.jsx";
import Totalgrid from "./Totalgrid.jsx";
import PopularPerson from "../instructor/PopularPerson.jsx";
import Newsletter from "../Contact/Newsletter.jsx";
import Instructors from "../instructor/Instructors.jsx";
import LiveSession from "./LiveSession.jsx";

const Home = () => {
    return (
        <div>

            {/*<Banner></Banner>*/}
            <BgHome></BgHome>
            <Totalgrid></Totalgrid>
            <ProductSlider></ProductSlider>
            <Categories></Categories>
            <Instructors></Instructors>
            <LiveSession></LiveSession>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;