import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Category2 from "../Category/Category2";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import Partners from "../Partners/Partners.jsx";

import headphone from "../../assets/hero/headphone.png";
import smartwatch2 from "../../assets/category/smartwatch2-removebg-preview.png";

import Products from "../Products/Products";
// import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer.jsx";
import Popup from "../Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};

class Home extends React.Component {
  state = {
    orderPopup: false,
    cart: [],
  };

  handleOrderPopup = () => {
    this.setState({ orderPopup: !this.state.orderPopup });
  };

  handleAddToCart = (product) => {
    this.setState({ cart: [...this.state.cart, product] }, () => {
      console.log(this.state.cart);
    });
  };

  componentDidMount() {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }

  render() {
    return (
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Navbar
          handleOrderPopup={this.handleOrderPopup}
          handleAddToCart={this.handleAddToCart}
          cart={this.state.cart}
        />
        <Hero handleOrderPopup={this.handleOrderPopup} />
        <Products handleAddToCart={this.handleAddToCart} />
        {/* <Category /> */}
        {/* <Category2 /> */}
        {/* <Services /> */}
        {/* <Banner data={BannerData} /> */}

        {/* <Banner data={BannerData2} /> */}
        {/* <Blogs /> */}
        {/* <Partners /> */}
        <Footer />
        <Popup
          orderPopup={this.state.orderPopup}
          handleOrderPopup={this.handleOrderPopup}
        />
      </div>
    );
  }
}

export default Home;
