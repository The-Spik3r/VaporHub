import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import Img1 from "../../assets/product/vape2.jpg";
import Img2 from "../../assets/product/lostvape.webp";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Grape Ice",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Lost Vape",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "https://dcdn.mitiendanube.com/stores/001/601/775/products/cyborg-1134x11341-23586f18d17ad8bbea16529844869542-1024-1024.jpg",
    title: "Elf Bar",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: "https://cdn.sistemawbuy.com.br/arquivos/61793d4f71e57473a93a378e72c4df88/produtos/65c3a4f616968/voopoodrag4kit_gunrosewood-800x800-65c617e007aec_mini.jpg",
    title: "Nvee vape pod ",
    price: "220",
    aosDelay: "600",
  },
];
const ProductsData2 = [
  {
    id: 1,
    img: "https://static.wixstatic.com/media/d9d366_8de7f32589cf4b7e9dacd1eddfb82412~mv2.png/v1/fill/w_556,h_556,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d9d366_8de7f32589cf4b7e9dacd1eddfb82412~mv2.png",
    title: "Smok Vape Pen V2 Kit 60W Black",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "https://www.royalqueenseeds.es/626-3725-thickbox/vape-pen-con-cbd.jpg",
    title: "Smok Vape Pen V2 kit Stainless Steel",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "https://smokevapeca.gumlet.io/wp-content/uploads/2021/03/1491803926301.jpg?compress=true&quality=80&w=576&dpr=2.6",
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: "https://vapeworldaustralia.com.au/cdn/shop/products/plain-coffee-iget-legend.jpg?v=1711429734&width=500",
    title: "Printed ",
    price: "220",
    aosDelay: "600",
  },
];
const Products = ({ handleAddToCart }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="DESTACADOS" subtitle={"los mas buscados"} />
        {/* Body section */}
        <ProductCard data={ProductsData} onAddToCart={handleAddToCart} />
        <ProductCard data={ProductsData2} onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default Products;
