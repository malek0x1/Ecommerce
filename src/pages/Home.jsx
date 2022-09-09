import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import MyNav from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <MyNav />
      <Slider />
      <Categories />
      <Products/>
      <Newsletter color="#FFF"/>
      <Footer color="#f0c90822"/>
    </div>
  );
};

export default Home;
