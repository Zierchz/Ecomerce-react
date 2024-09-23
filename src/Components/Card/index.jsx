import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { CheckCircleIcon, ShoppingBagIcon } from "@heroicons/react/16/solid"

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (product) => {
        context.OpenProductDetail()
        context.CloseCheckoutSideMenu()
        context.setProductToShow(product)
    }

    const addProductsToCart = (event, ProductData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.OpenCheckoutSideMenu()
        context.CloseProductDetail()
        context.setCartProducts([...context.cartProducts, ProductData])
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
    
        if (isInCart) {
            return (
                <div
                    onClick={(event) => event.stopPropagation()} 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-10 h-10 rounded-full m-2 p-3 border-2 border-solid border-gray-400
                '>
                    <span className=" text-xl">
                        <CheckCircleIcon className="size-9 text-emerald-600" />
                    </span>
                </div>
            )
        }
        else {
            return (
                <div
                    onClick={(event) => addProductsToCart(event, data.data)}
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-10 h-10 rounded-full m-2 p-3 border-2 border-solid border-gray-400
                transition-all ease-in-out duration-500 hover:scale-125'>
                    <span className="pb-1 text-xl transition-all ease-in-out hover:scale-125 hover:animate-pulse">
                        <ShoppingBagIcon className="size-7 text-emerald-600" />
                    </span>
                </div>
            )
        }
    }

    return (
        <> <div className='w-56   cursor-pointer h-60 transition-all ease-in-out duration-500 my-5'
            onClick={() => showProduct(data.data)}>
            <figure className='relative w-full mb-2 h-4/5'>
                <span className='absolute bottom-0 left-0 text-xs text-black rounded-lg bg-green-200 m-2 px-3 py-0.5 font-semibold'>{data.data.category.name}</span>
                <img className='border-2 border-white w-full h-full object-cover transition-all ease-in-out duration-500 rounded-lg   hover:rounded-3xl
                     hover:shadow-2xl' src={data.data.images[0]} alt={data.data.title} />
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between text-wrap'>
                <span className='text-md font-semibold'>{data.data.title}</span>
                <span className='text-xl font-bold text-green-600'>${data.data.price}</span>

            </p>
        </div>

        </>
    )
}

export default Card