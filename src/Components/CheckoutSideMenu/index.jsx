import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from '@heroicons/react/16/solid'
import './styles.css'

const CheckoutSideMenu = () =>{
    const context = useContext(ShoppingCartContext)
    
    
    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-menu flex flex-col fixed bg-white right-0 border-2 
         border-gray-400 rounded-3xl text-gray-700 transition-all ease-in-out duration-300 rounded-r-none border-r-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-semibold text-2xl'>My Order:</h2>
        <XMarkIcon
         className='size-8 transition-transform ease-in-out duration-300 hover:scale-150 cursor-pointer border-2 border-gray-500 rounded-full'
         onClick={context.CloseCheckoutSideMenu}/>
    </div>
   
</aside>
        
    )
} 
export default CheckoutSideMenu