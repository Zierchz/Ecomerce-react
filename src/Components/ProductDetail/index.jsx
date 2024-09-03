import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from '@heroicons/react/16/solid'
import './styles.css'

const ProductDetail = () =>{
    const context = useContext(ShoppingCartContext)
    
    
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed bg-white right-0 border-2 
         border-gray-400 rounded-lg text-gray-700 transition-all ease-in-out duration-300 rounded-r-none`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-semibold text-2xl'>Details of the product:</h2>
        <XMarkIcon
         className='size-8 transition-transform ease-in-out duration-300 hover:scale-150 cursor-pointer border-2 border-gray-500 rounded-full'
         onClick={context.CloseProductDetail}/>
    </div>
    <figure className="px-6 flex justify-center items-center">
    {context.productToShow.images && context.productToShow.images.length > 0 ? (
        <img
            className=" max-h-[350px] max-w-[400px] border-4 border-gray-200 rounded-lg"
            src={context.productToShow.images[0]}
            alt={context.productToShow.title}
        />
    ) : (<p></p> )}
</figure>
    <p className="flex flex-col p-6">
        <span className="font-bold text-xl">{context.productToShow.title}</span>
        <span className="font-semibold text-lg">Price: ${context.productToShow.price}</span>
        <span className="font-medium text-md">{context.productToShow.description}</span>
    </p>
    
</aside>
        
    )
} 
export default ProductDetail