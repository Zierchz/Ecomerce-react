import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from '@heroicons/react/16/solid'
import './styles.css'
import OrderCard from './../OrderCard/index';
import { TotalPrice } from "../../utils";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {

        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
        if (filteredProducts.length === 0) {
            context.CloseCheckoutSideMenu()
        }
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: TotalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.CloseCheckoutSideMenu()
    }


    return (
        <aside className={`checkout-menu h-4/5 shadow-xl flex flex-col fixed bg-white right-0 border-2 border-gray-400 rounded-3xl text-gray-700 
        transition-transform duration-500 ease-in-out transform ${context.isCheckoutSideMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
        rounded-r-none border-r-white `}>
            <div className='flex justify-between items-center pl-6 pr-1 py-3 bg-gray-50 rounded-tl-3xl'>
                <h2 className='font-semibold text-2xl'>My Order:</h2>
                <XMarkIcon
                    className='size-8 transition-transform ease-in-out duration-500 hover:scale-150 cursor-pointer'
                    onClick={context.CloseCheckoutSideMenu}
                />
            </div>
            <div className="px-6 overflow-y-auto flex-grow">
                {
                    context.cartProducts.map(product => (
                        <OrderCard product={product} key={product.id} handleDelete={handleDelete} />
                    ))
                }
            </div>
            <div className="p-4 pt-1  text-lg font-bold bg-gray-50 rounded-bl-3xl">
                <p className="flex items-center justify-between pb-2 text-center">
                    <span className="">
                        Products: {context.cartProducts.length}
                    </span>

                    <span className="">
                        Total: ${TotalPrice(context.cartProducts)}
                    </span>
                </p>

                <Link className="flex justify-center" to={`my-orders/${context.order.length}`}>
                    <button className="flex justify-center flex-row w-4/5 bg-green-400 p-1 rounded-md text-xl font-bold transition-all hover:bg-green-500 hover:scale-110 duration-300"
                        onClick={() => handleCheckout()}>
                        Checkout
                    </button>
                </Link>


            </div>
        </aside>
    )
}
export default CheckoutSideMenu
