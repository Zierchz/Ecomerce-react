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
    
    // Product Detail . Show Product
    const [productToShow, setProductToShow] = useState({});

return (
    <ShoppingCartContext.Provider value={{
        count, 
        setCount,
        isProductDetailOpen,
        OpenProductDetail,
        CloseProductDetail,
        productToShow,
        setProductToShow
        }}>
        {children}
    </ShoppingCartContext.Provider>
)
}