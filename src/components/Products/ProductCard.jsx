import React, { useState } from "react";
import Button from "../Shared/Button";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ data, onAddToCart }) => {
  const navigate = useNavigate();
  const [CartPush, setCartPush] = useState(0);
  const handlerClick = (product, event) => {
    console.log("product", product);
    event.stopPropagation();
    setCartPush(CartPush + 1);
    onAddToCart(product);
    // Guardar el producto en localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const handler = () => {
    navigate("/cart");
  };

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((product) => (
          <div
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
            className="group"
            key={product.id}
          >
            <div className="relative">
              <img
                src={product.img}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                <Button
                  text={"ir al carrito"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                  handler={(event) => {
                    handlerClick(product, event);
                    handler();
                  }}
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{product.title}</h2>
              <h2 className="font-bold">${product.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
