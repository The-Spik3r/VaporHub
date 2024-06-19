import React, { useState, useEffect } from "react";
import Layout from "../../layout/layout";
import Services from "../Services/Services";
const Cart = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [unidad, setUnidad] = useState(1);
  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("cart"));
    console.log(product);
    if (product && product.length > 0) {
      setSelectedProduct(product);

      // Calcular el subtotal sumando los precios de todos los productos
      const subtotal = product.reduce(
        (total, product) => total + Number(product.price),
        0
      );
      setSubtotal(subtotal);

      // Calcular el total multiplicando el precio de cada producto por la cantidad seleccionada
      const total = product.reduce(
        (total, product) => total + Number(product.price) * unidad,
        0
      );
      setTotal(total);
    } else {
      setSelectedProduct([]);
    }
  }, [unidad]);
  const handleRemoveProduct = (id) => {
    if (selectedProduct) {
      const productExists = selectedProduct.some(
        (product) => product.id === id
      );

      if (productExists) {
        console.log(`El producto con el id ${id} existe en selectedProduct.`);
        const updatedProducts = selectedProduct.filter(
          (product) => product.id !== id
        );
        setSelectedProduct(updatedProducts);

        // Actualizar el almacenamiento local
        localStorage.setItem("cart", JSON.stringify(updatedProducts));
      } else {
        console.log(
          `El producto con el id ${id} no existe en selectedProduct.`
        );
      }
    } else {
      console.log("No hay productos en selectedProduct.");
    }
  };
  console.log(selectedProduct);
  return (
    <div>
      <Layout>
        <div className="flex w-full py-5">
          {/* Add the code for displaying products here */}
          <div className=" w-full bg-white dark:bg-gray-900 pt-20">
            <h1 className="mb-10 text-center text-2xl font-bold">
              Artículos del Carrito
            </h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {selectedProduct && selectedProduct.length > 0 ? (
                  selectedProduct.map((product) => (
                    <div
                      key={product.id}
                      className="justify-between mb-6 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md sm:flex sm:justify-start"
                    >
                      <img
                        src={product.img}
                        alt="product-image"
                        className="w-full rounded-lg sm:w-40"
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                            {product.title}
                          </h2>
                          <p className="mt-1 text-xs text-gray-700 dark:text-gray-300">
                            {/* {product.size} // Asegúrate de que el producto tiene
                            una propiedad 'size' */}
                          </p>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className="flex items-center border-gray-100">
                            <span
                              className="cursor-pointer rounded-l bg-gray-100 dark:bg-gray-700 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                              onClick={() =>
                                setUnidad(unidad > 0 ? unidad - 1 : 0)
                              }
                            >
                              {" "}
                              -{" "}
                            </span>
                            <p className="px-2">{unidad}</p>
                            <span
                              className="cursor-pointer rounded-r bg-gray-100 dark:bg-gray-700 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                              onClick={() => setUnidad(unidad + 1)}
                            >
                              {" "}
                              +{" "}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              {product.price} $
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                              onClick={() => handleRemoveProduct(product.id)}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No hay productos en el carrito.</p>
                )}
              </div>
              {/* Sub total */}
              <div className="mt-6 h-full rounded-lg border bg-white dark:bg-gray-800 p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700 dark:text-white">Subtotal</p>
                  <p className="text-gray-700 dark:text-white">
                    ${Number(subtotal).toFixed(2)}
                  </p>
                </div>
                 <div className="flex justify-between">
                  <p className="text-gray-700 dark:text-white">Cantidad</p>
                  <p className="text-gray-700 dark:text-white">{unidad} </p>
                </div> 
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold dark:text-white">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold dark:text-white">
                      ${total} ARS
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      incluido IVA
                    </p>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                  Realizar Pedido
                </button>
              </div>
            </div>
            <div className="mt-10 hidden lg:block">
              <Services />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Cart;
