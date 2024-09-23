import { createContext, useEffect, useState } from "react";


export const ShoppingCartContext = createContext();



// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
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

    // Shopping Cart . Order
    const [order, setOrder] = useState([]);

    // Get products
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);


    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState('');

 


    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => { setItems(data); setFilteredItems(data) })
    }, []);

    useEffect(() => {
        if (searchByTitle) setFilteredItems(items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase())))
        if (searchByTitle === '') setFilteredItems(items)
       
    }, [items, searchByTitle]);




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
            CloseCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
       
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}