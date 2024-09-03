import { createContext, useState } from "react";


export const ShoppingCartContext = createContext();



// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart Count
    const [count, setCount] = useState(0);

    // Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const OpenProductDetail = () => setIsProductDetailOpen(true);
    const CloseProductDetail = () => setIsProductDetailOpen(false);

     // Checkout Side Menu Open/Close
     const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
     const OpenCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
     const CloseCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    
    // Product Detail . Show Product
    const [productToShow, setProductToShow] = useState({});

    // Shopping Cart . Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

return (
    <ShoppingCartContext.Provider value={{
        count, 
        setCount,
        isProductDetailOpen,
        OpenProductDetail,
        CloseProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        OpenCheckoutSideMenu,
        CloseCheckoutSideMenu
        }}>
        {children}
    </ShoppingCartContext.Provider>
)
}