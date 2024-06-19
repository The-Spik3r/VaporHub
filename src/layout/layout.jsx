import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
    const [orderPopup, setOrderPopup] = useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            {/* Aquí puedes agregar el contenido del layout, como la barra de navegación, el encabezado, etc. */}
            <Navbar handleOrderPopup={handleOrderPopup} />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
