import { createContext, useEffect, useState } from "react";


export const ShoppingCartContext = createContext();

export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account')
    const signOutInLocalStorage = localStorage.getItem('sign-out')
    let parsedAccount
    let parsedSignOut

    if(!accountInLocalStorage){
        localStorage.setItem('account', JSON.stringify({}))
        parsedAccount = {}
    }
    else{
        parsedAccount = JSON.parse(accountInLocalStorage)
    }

    if(!signOutInLocalStorage){
        localStorage.setItem('sign-out', JSON.stringify(false))
        parsedSignOut = false
    }
    else{
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
}

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
    // Local Storage (account and sign-out)
    const [account, setAccount] = useState({})
    const [signOut, setSignOut] = useState(false)

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
            account,
            setAccount,
            signOut,
            setSignOut
       
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}